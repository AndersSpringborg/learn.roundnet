import Image from "next/image";
import Link from "next/link";
const Lightroom = () => (

<main role="main" className="w-full lg:col-span-3">
  <section>
    <div className="grid grid-cols-1 gap-3 p-4">
      <div
        className="aspect-[280/300] bg-zinc-100 rounded-xl overflow-hidden filter grayscale"
      >
        <Image className="object-cover h-full" src={"/index.jpg"} fill alt="#" />
      </div>
    </div>
  </section>
</main>)

const siteConfig = {
    title: "roundnet bible",
    description: "learn.roundnet is a community effort to create a central hub for roundnet players and enthusiasts to learn about the sport.",
    links: [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Roadmap",
            href: "/bible/introduction#roadmap",

        },
        {
            name: "Communities",
            href: "/communities",
        }
    ]

}

const Index = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
        <div className="2xl:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <aside className="w-full">
                    <div
                        className="sticky top-0 rounded-xl w-full px-8 sm:px-16 py-8 lg:py-12 lg:px-10">
                        <div>
                            <a href="/" className="text-black dark:text-white">
                                <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    >
                                        <path d="M6 5h12l3 5l-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5"></path>
                                        <path
                                            d="M10 12L8 9.8l.6-1"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <h1
                            className="text-black dark:text-white text-2xl md:text-4xl xl:text-7xl 2xl:text-6xl font-bold tracking-tighter">
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
                                    <a
                                        className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                                        href="#"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
                                        >
                                            <path
                                                d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                                        href="#"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a
                                        className="group flex text-sm font-medium dark:text-zinc-400 text-zinc-500 transition hover:text-black dark:hover:text-white"
                                        href="mailto:spencer@planetaria.tech"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-400"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <nav>
                                <ul
                                    className="lg:space-y-3 space-x-3 list-none no-underline mt-6 lg:mt-12 inline-flex items-center sm:flex sm:flex-col sm:items-start sm:space-x-0"
                                    role="list">
                                    {siteConfig.links.map((item, key) => (
                                        <li key={key}>
                                            <Link href={item.href} className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <a
                                            className="group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-zinc-900 text-white hover:bg-zinc-700 hover:text-zinc-100 active:bg-zinc-800 active:text-zinc-300 focus-visible:outline-zinc-900 dark:bg-white dark:text-black"
                                            href="/bible">
                                            <span>Documentation</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </aside>

                <Lightroom/>
            </div>
        </div>
        </div>
    )
}

export default Index