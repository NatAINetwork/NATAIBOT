from typing import Optional

from sqlalchemy import select, and_
from sqlalchemy.orm import selectinload

from reworkd_platform.db.crud.base import BaseCrud
from reworkd_platform.db.models.auth import organization_user
from reworkd_platform.db.models.user import UserSession


class UserCrud(BaseCrud):
    async def get_user_session(self, token: str) -> UserSession:
        query = (
            select(UserSession)
            .filter(UserSession.session_token == token)
            .options(selectinload(UserSession.user))
        )
        return (await self.session.execute(query)).scalar_one()

    async def get_user_organization(
        self, user_id: str, organization_id: str
    ) -> Optional[organization_user]:
        query = select(organization_user).filter(
            and_(
                organization_user.user_id == user_id,
                organization_user.organization_id == organization_id,
            )
        )

        # TODO: Only returns the first organization
        return (await self.session.execute(query)).scalar()
