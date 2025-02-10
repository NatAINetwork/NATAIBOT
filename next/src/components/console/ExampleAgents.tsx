import clsx from "clsx";
import { useSession } from "next-auth/react";
import React from "react";

import { ChatMessage } from "./ChatMessage";
import { ExampleAgentButton } from "./ExampleAgentButton";
import { useSID } from "../../hooks/useSID";
import { MESSAGE_TYPE_SYSTEM } from "../../types/message";
import Button from "../Button";
import FadeIn from "../motions/FadeIn";
import { env } from "../../env/client.mjs";

type ExampleAgentsProps = {
  setAgentRun?: (name: string, goal: string) => void;
  setShowSignIn: (show: boolean) => void;
};

const ExampleAgents = ({ setAgentRun, setShowSignIn }: ExampleAgentsProps) => {
  const { data: session } = useSession();
  const sid = useSID(session);

  return (
    <>
      <FadeIn delay={0.8} duration={0.5}>
        <ChatMessage
          message={{
            type: MESSAGE_TYPE_SYSTEM,
            value:
              "👉 Create a NatAI agent by adding a name / goal, and hitting deploy! Try our examples below!",
          }}
        />
      </FadeIn>
      <FadeIn delay={0.9} duration={0.5}>
        <div className="m-2 grid grid-cols-1 grid-rows-2 items-stretch gap-2 sm:m-4 sm:grid-cols-3">
        <ExampleAgentButton name="CryptoAI: 📊" setAgentRun={setAgentRun}>
            Analyzes specified cryptocurrencies, providing valuable insights for informed trading decisions.
          </ExampleAgentButton>

          {env.NEXT_PUBLIC_FF_SID_ENABLED && (
            <div
              className={clsx(
                `w-full p-2 sm:w-[33%]`,
                `cursor-pointer rounded-lg font-mono text-sm sm:text-base`,
                `border-2 border-white/20 bg-gradient-to-t from-[#1B1B1C] to-[#34343B] transition-all hover:bg-gradient-to-t hover:from-gray-400 hover:to-gray-600`
              )}
              onClick={() => {
                if (!session?.user) setShowSignIn(true);
                else if (!sid?.connected) sid.install().catch(console.error);
                else
                  setAgentRun?.(
                    "AssistantGPT 🛟",
                    "Search my google drive, dropbox, and notion, and talk to me about my personal data."
                  );
              }}
            >
              <p className="text-lg font-black">AssistantGPT 🛟</p>
              <p className="mt-2 text-sm">Get tailored advice based on your own data</p>
              <Button
                ping={!sid?.connected}
                className={clsx(
                  "w-full border-white/20 bg-gradient-to-t from-amber-500 to-amber-600 transition-all hover:bg-gradient-to-t hover:from-amber-400 hover:to-amber-600 sm:mt-4",
                  sid.connected && "hidden"
                )}
                onClick={async () => {
                  if (!session?.user) setShowSignIn(true);
                  else await sid.install();
                }}
                loader
              >
                Connect your Data
              </Button>
            </div>
          )}

          {env.NEXT_PUBLIC_FF_SID_ENABLED || (
          <ExampleAgentButton name="MarketAI: 🌐" setAgentRun={setAgentRun}>
          Predicts trends and risks in the broader cryptocurrency market for profitable investment opportunities..
        </ExampleAgentButton>
          )}

          <ExampleAgentButton name="PortfolioAI: 💼" setAgentRun={setAgentRun}>
            Optimizes and manages crypto portfolios, ensuring efficient asset allocation and risk management.
          </ExampleAgentButton>
        </div>
      </FadeIn>
    </>
  );
};

export default ExampleAgents;
