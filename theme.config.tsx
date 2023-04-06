import { DocsThemeConfig } from "nextra-theme-docs";
import Headers from "./components/header";
import React from "react";
import SiteLogo from "./components/Logos/SiteLogo";

const config: DocsThemeConfig = {
  logo: <SiteLogo width={50} height={50} />,
  project: {
    link: "https://github.com/AndersSpringborg/learn.roundnet.site",
  },
  chat: {
    link: "https://www.instagram.com/onkel_anderss/",
  },
  head: <Headers />,
  footer: {
    text: "© " + new Date().getFullYear() + " Anders Aaen Springborg",
  },
  primaryHue: 55, // https://nextra.site/docs/docs-theme/theme-configuration#theme-color
  useNextSeoProps() {
    return {
      titleTemplate: "%s - learn roundnet",
    };
  },
  docsRepositoryBase:
    "https://github.com/AndersSpringborg/learn.roundnet.site/tree/main",
};
export default config;
