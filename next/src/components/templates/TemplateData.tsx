import {
  FaAppleAlt,
  FaBlog,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaCalendarAlt,
  FaChartLine,
  FaDumbbell,
  FaFileAlt,
  FaGamepad,
  FaGraduationCap,
  FaHashtag,
  FaLaptop,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPalette,
  FaPlaneDeparture,
  FaRegEnvelope,
  FaRegNewspaper,
  FaShoppingCart,
  FaStarAndCrescent,
} from "react-icons/fa";

export const TEMPLATE_DATA: TemplateModel[] = [
  {
    name: "OnChain Oracle",
    icon: <FaBookReader />,
    category: "Crypto Analysis",
    description: "Deep dive into BTC market trends using on-chain analytics, derivatives data, and macroeconomic indicators to forecast short-term price movements.",
    promptTemplate:
      "Analyze Bitcoin's price action by integrating on-chain data (whale movements, exchange flows, miner reserves), derivatives metrics (funding rates, OI shifts), and macro factors (FED policy, DXY trends). Identify potential liquidation zones and key support/resistance levels to forecast BTC’s price trajectory in the next 7 days.",
    placeholder: "BTC Market Forecast (Next 7 Days)",
  },

  {
    name: "Memecoin Alchemy",
    icon: <FaLaptop />,
    category: "Crypto Trading",
    description: "Break down emerging memecoins, analyzing social sentiment, liquidity depth, and smart money movements to separate hype from hidden gems.",
    promptTemplate:
      "Identify high-potential memecoins using a multi-layered analysis of social sentiment (Twitter, Telegram, Reddit mentions), liquidity trends (DEX volume, LP depth), and smart money activity (whale wallet tracking, MEXC/Binance listings). Highlight the probability of sustained hype vs. early rug-pull indicators.",
    placeholder: "Memecoin Hype Analysis",
  },

  {
    name: "DeFi Pulse",
    icon: <FaLaptopCode />,
    category: "DeFi & Yield Farming",
    description: "Assess real-time DeFi yield opportunities, factoring in APY sustainability, smart contract risks, and regulatory trends.",
    promptTemplate:
      "Evaluate top DeFi yield opportunities by analyzing APY sustainability (inflation vs. organic yield), smart contract risks (audit history, TVL security), and regulatory shifts (SEC/CFTC impact on staking/farming). Provide a risk-adjusted ranking of yield strategies across Ethereum, BSC, and Solana ecosystems.",
    placeholder: "Top DeFi Yields & Risks",
  }
];

export interface TemplateModel {
  name: string;
  icon: JSX.Element;
  category: string;
  description: string;
  promptTemplate: string;
  placeholder: string;
}
