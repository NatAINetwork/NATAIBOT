from typing import Optional
from urllib.parse import urlparse, urljoin

from bs4 import BeautifulSoup
from fastapi import APIRouter
from httpx import AsyncClient, RequestError, HTTPStatusError
from pydantic import BaseModel, Field

router = APIRouter()


class Metadata(BaseModel):
    title: Optional[str] = Field(default=None, description="Title of the page")
    hostname: Optional[str] = Field(default=None, description="Hostname of the page")
    favicon: Optional[str] = Field(default=None, description="Favicon of the page")


@router.get(
    "",
)
async def extract_metadata(url: str) -> Metadata:
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
        }

        async with AsyncClient() as client:
            res = await client.get(url, headers=headers)

        res.raise_for_status()

        soup = BeautifulSoup(res.text, "html.parser")
        parsed_url = urlparse(url)

        metadata = Metadata(
            hostname=parsed_url.hostname,
            title=soup.title.string.strip() if soup.title else None,
        )

        favicon = None
        for link in soup.find_all("link", rel=lambda x: x in ["icon", "shortcut icon"]):
            favicon = link.get("href")
            if not favicon.startswith("http"):
                favicon = urljoin(url, favicon)
            break

        metadata.favicon = (
            favicon
            if favicon
            else f"{parsed_url.scheme}://{parsed_url.hostname}/favicon.ico"
        )

        return metadata

    except (RequestError, HTTPStatusError):
        parsed_url = urlparse(url)
        return Metadata(
            hostname=parsed_url.hostname,
            favicon=f"{parsed_url.scheme}://{parsed_url.hostname}/favicon.ico",
        )
