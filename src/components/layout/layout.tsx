import Head from "next/head";
import { Basket } from "../basket/basket";
import { FooterView } from "../footer/footerView";
import { HeaderView } from "../header/headerView";
import style from "./layout.module.css";
import { MobileMenuView } from "../mobileMenu/mobileMenuView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { basketMiddleWare } from "../../store/middleware/basketMiddleWare";
import { formMiddleWare } from "../../store/middleware/formMiddleWare";


type Props = {
    children: React.ReactNode,
    title?: string,
    footerView?: string,
    headView?: boolean,
}

let numRender = 0;

export function Layout({
    children, 
    title='Page', 
    footerView,
    headView = true,
}: Props){
    // redux dispatch init
    const dispatch = useDispatch();
    // life cycle
    useEffect(() => {  
        // first run   
        if(numRender == 0){
            // check local storage and add goods in basket
            dispatch(
                basketMiddleWare(
                    '0', 
                    'localStorage'
                )
            )
            dispatch(
                formMiddleWare(
                    '', 
                    '', 
                    'localStorage'
                )
            );
        }
        // number render
        numRender++;
    },[])
    // render
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