import { User } from "next-auth";
import type { IconType } from "react-icons";
import {
  FaBusinessTime,
  FaCog,
  FaDiscord,
  FaFileCode,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaQuestion,
  FaTwitter,
  FaWater,
} from "react-icons/fa";

type LinkMetadata = {
  name: string;
  href: string;
  icon: IconType;
  badge?: {
    text: string;
    className?: string;
  };
  className?: string;
  enabled: boolean | ((user?: User) => boolean);
};
export const PAGE_LINKS: LinkMetadata[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
    className: "group-hover:text-color-secondary",
    enabled: true,
  },
  {
    name: "Flows",
    href: "/workflow",
    icon: FaWater,
    className: "transition-transform group-hover:scale-110",
    enabled: (user) => !!user && user.organizations.length > 0,
    badge: {
      text: "Alpha",
      className: "bg-gradient-to-tr from-purple-500 to-sky-600",
    },
  },
  {
    name: "Templates",
    href: "/templates",
    icon: FaFileCode,
    className: "transition-transform group-hover:scale-110",
    enabled: true,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: FaCog,
    className: "transition-transform group-hover:rotate-90",
    enabled: true,
  },
  {
    name: "Organization",
    href: "/organization",
    icon: FaBusinessTime,
    className: "transition-transform group-hover:scale-110",
    enabled: (user) => !!user && user.organizations.length > 0
  }
];

export const SOCIAL_LINKS: LinkMetadata[] = [

  {
    name: "Twitter",
    href: "https://twitter.com/NatAINetwork",
    icon: FaTwitter,
    enabled: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/coming_soon",
    icon: FaDiscord,
    enabled: true,
  },

];
