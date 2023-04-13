import Image from "next/image";
import Link from "next/link";

import SiteLogo from "../components/Logos/SiteLogo";
import { GithubLogo, InstagramLogo, MailLogo } from "../components/Logos";
import { siteConfig } from "../data/siteConfig";
import { TailwindIndicator } from "../components/tailwind-indicator";

const Lightroom = () => (
  <div className="gap-3 p-4 h-full flex">
    <div className="bg-zinc-100 rounded-xl overflow-hidden filter grayscale bg-red-600 w-full">
      <Image
        className="object-cover h-full object- w-full"
        src={"/index.jpg"}
        alt="#"
        fill
      />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white min-h-screen">
      <div className="flex h-screen max-w-7xl mx-auto flex-col md:flex-row">
        <aside className="md:w-1/3">
          <div className="px-8 sm:px-16 py-8 md:px-8 lg:py-12 lg:px-10">
            <div>
              <Link href="/" className="text-black dark:text-white">
                <SiteLogo width={50} height={50} />
              </Link>
            </div>
            <h1 className="text-black dark:text-white text-2xl md:text-4xl lg:text-7xl font-bold tracking-tighter">
              {siteConfig.title.toLowerCase()}
            </h1>
            <div className="lg:mt-8 max-w-xl">
              <p className="dark:text-zinc-400 text-zinc-500 text-base">
                {siteConfig.description}
              </p>
            </div>
            <div className="mt-4 pt-6 border-t border-zinc-800">
              <ul className="inline-flex items-center gap-3" role="list">
                <li className="flex">
                  <Link
                    className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                    href="https://www.instagram.com/onkel_anderss/"
                  >
                    <InstagramLogo />
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                    href="https://github.com/AndersSpringborg/learn.roundnet.site"
                  >
                    <GithubLogo />
                  </Link>
                </li>
                <li className="flex">
                  <a
                    className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                    href="mailto:aaspringborg@gmail.com"
                  >
                    <MailLogo />
                  </a>
                </li>
              </ul>
              <nav>
                <ul className="lg:space-y-3  mt-6 lg:mt-12" role="list">
                  {siteConfig.links.map((item, key) => (
                    <li key={key} className="">
                      <Link
                        href={item.href}
                        className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      className="group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-zinc-900 text-white hover:bg-zinc-700 hover:text-zinc-100 active:bg-zinc-800 active:text-zinc-300 focus-visible:outline-zinc-900 dark:bg-white dark:text-black"
                      href="/bible"
                    >
                      <span>Bible</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <main role="main" className="flex-auto">
          <Lightroom />
        </main>
      </div>
      <TailwindIndicator />
    </div>
  );
};

export default Index;
