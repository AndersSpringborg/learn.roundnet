import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Logo} from "./components/logo";
import Headers from "./components/header";



const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/supercomputer-klubben-aau/sbcc-site',
  },
  chat: {
    link: "https://www.instagram.com/onkel_anderss/",
  },
  head: <Headers/>,
  footer: {
    text: '© ' + new Date().getFullYear() +' Anders Aaen Springborg',
  },
  primaryHue: 266,
  useNextSeoProps() {
    return {
        titleTemplate: '%s - learn roundnet',
    }
  }
}

export default config