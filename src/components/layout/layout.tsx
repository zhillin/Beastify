import Head from "next/head";
import { Basket } from "../basket/basket";
import { FooterView } from "../footer/footerView";
import { HeaderView } from "../header/headerView";
import style from "./layout.module.css";
import { MobileMenuView } from "../mobileMenu/mobileMenuView";


type Props = {
    children: React.ReactNode,
    title?: string,
    footerView?: string,
    headView?: boolean,
}

export function Layout({
    children, 
    title='Page', 
    footerView,
    headView = true,
}: Props){

    return(
        <>
            <Head>
                <title>Beastify — {title}</title>
                <meta content="Hello, this is a test project on react" name="description"></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
                <link rel="manifest" href="/favicon/site.webmanifest"></link>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"></link>
                <meta name="msapplication-TileColor" content="#ffffff"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <div className={style.wrapper}>
                {headView ? <HeaderView /> : null }
                    {children}
                <FooterView footerView={footerView}/>
                <Basket />
                <MobileMenuView />
            </div>
        </>
    )
}