import Image from "next/image";
import Link from "next/link";

import SiteLogo from "../components/Logos/SiteLogo";

const Lightroom = () => (
  <main role="main" className="w-full lg:col-span-3">
    <section>
      <div className="grid grid-cols-1 gap-3 p-4">
        <div className="aspect-[280/300] bg-zinc-100 rounded-xl overflow-hidden filter grayscale">
          <Image
            className="object-cover h-full"
            src={"/index.jpg"}
            fill
            alt="#"
          />
        </div>
      </div>
    </section>
  </main>
);

const siteConfig = {
  title: "roundnet bible",
  description:
    "learn.roundnet is a community effort to create a central hub for roundnet players and enthusiasts to learn about the sport.",
  links: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Roadmap",
      href: "/bible#roadmap",
    },
    {
      name: "Communities",
      href: "/communities",
    },
    {
      name: "Calculate RPR",
      href: "/bible/Rpr",
    }
  ],
};

function InstagramLogo() {
  return (
    <svg
      aria-label="Instagram"
      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Instagram</title>
      <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      ></path>
    </svg>
  );
}

function MailLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
    >
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      ></path>
    </svg>
  );
}

const Index = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <aside className="w-full">
            <div className="sticky top-0 rounded-xl w-full px-8 sm:px-16 py-8 lg:py-12 lg:px-10">
              <div>
                <Link href="/" className="text-black dark:text-white">
                  <SiteLogo width={50} height={50} />
                </Link>
              </div>
              <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-7xl 2xl:text-6xl font-bold tracking-tighter">
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
                  <ul
                    className="lg:space-y-3 space-x-3 list-none no-underline mt-6 lg:mt-12 inline-flex items-center sm:flex sm:flex-col sm:items-start sm:space-x-0"
                    role="list"
                  >
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
                        <span>Documentation</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          <Lightroom />
        </div>
      </div>
    </div>
  );
};

export default Index;
