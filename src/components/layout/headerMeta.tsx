import Head from "next/head";

export function HeaderMeta({title}: {title: string}){
    return(
        <Head>
            <title>Beastify — {title}</title>
            <meta content="Beastify shop" name="description"></meta>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
            <link rel="manifest" href="/favicon/site.webmanifest"></link>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"></link>
            <meta name="msapplication-TileColor" content="#ffffff"></meta>
            <meta name="theme-color" content="#ffffff"></meta>

            <meta property="og:url" content="Beastify shop" />
            <meta property="og:title" content="Beastify shop" />
            <meta property="og:description" content="Only the best" />
            <meta property="og:image" content="https://beastify.zhilin.one/img/bcard.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://beastify.zhilin.one/img/bcard.jpg"/>
        </Head>
    )
}