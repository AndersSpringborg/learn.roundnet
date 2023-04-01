import Head from "next/head";

const data = {
        title: "Learn Roundnet",
        description: "Learn Roundnet is the one place for all your roundnet needs",
        link: "https://learn-roundnet.vercel.app/"
}

const path_to_logo = "https://learn-roundnet.vercel.app/android-chrome-512x512.png";
const Headers = () => {
    return (
        <Head>
            {/*!--Primary Meta Tags --*/}
            <title>{data.title}</title>
            <meta name="title" content={data.title}/>
            <meta name="description" content={data.description}/>

            {/*<!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://sbcc.io/"/>
            <meta property="og:title" content={data.title}/>
            <meta property="og:description" content={data.description}/>
            <meta property="og:image" content={path_to_logo}/>

            {/*<!-- Twitter -->*/}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={data.link}/>
            <meta property="twitter:title" content={data.title}/>
            <meta property="twitter:description" content={data.description}/>
            <meta property="twitter:image" content={path_to_logo}/>
            {/* favicon */}
            <link rel="icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    )
}

export default Headers;