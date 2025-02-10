import clsx from "clsx";
import React from "react";
import Button from "../Button";

export const ExampleAgentButton = ({
  name,
  children,
  setAgentRun,
}: {
  name: string;
  children: string;
  setAgentRun?: (name: string, goal: string) => void;
}) => {
  const handleClick = () => {
    if (setAgentRun) {
      setAgentRun(name, children);
    }
  };

  return (
    <div
      className={clsx(
        `w-full p-2`,
        `cursor-pointer rounded-lg font-mono text-sm sm:text-base`,
        `border-2 border-white/20 bg-gradient-to-t from-[#1B1B1C] to-[#34343B] transition-all hover:bg-gradient-to-t hover:from-gray-400 hover:to-gray-600`
      )}
      onClick={handleClick}
    >
      <p className="text-lg font-black">{name}</p>
      <p className="mt-2 text-sm">{children}</p>
    </div>
  );
};
