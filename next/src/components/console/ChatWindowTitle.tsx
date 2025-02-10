import React from "react";

import type { GPTModelNames } from "../../types";
import { GPT_35_TURBO_16K, GPT_4 } from "../../types";

export const ChatWindowTitle = ({ model }: { model: GPTModelNames }) => {
  if (model === GPT_4) {
    return (
      <>
        NatBot<span className="text-amber-500">AI</span>
      </>
    );
  }

  if (model === GPT_35_TURBO_16K) {
    return (
      <>
        Nat
        <span className="text-neutral-400">
          AI<span className="text-amber-500">-16K</span>
        </span>
      </>
    );
  }

  return (
    <>
      NatBot<span className="text-neutral-400">AI</span>
    </>
  );
};
