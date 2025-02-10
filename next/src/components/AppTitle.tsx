import { useTranslation } from "next-i18next";
import React from "react";

import Badge from "./Badge";
import BannerBadge from "./BannerBadge";
import PopIn from "./motions/popin";

const AppTitle = () => {
  const { i18n } = useTranslation();

  return (
    <div id="title" className="relative flex flex-col items-center font-mono">
      <div className="flex flex-row items-start">
        <span className="text-4xl font-bold text-[#C0C0C0] xs:text-5xl sm:text-6xl">Nat</span>
        <span className="text-4xl font-bold text-white xs:text-5xl sm:text-6xl">Bot</span>
        <PopIn delay={0.5}>

        </PopIn>
      </div>
      <div className="mt-3 text-center font-mono text-[0.7em] font-bold text-white">
        <div>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
