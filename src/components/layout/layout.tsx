import { Basket } from "../basket/basket";
import { FooterView } from "../footer/footerView";
import { HeaderView } from "../header/headerView";
import style from "./layout.module.css";
import { MobileMenuView } from "../mobileMenu/mobileMenuView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { basketMiddleWare } from "../../store/middleware/basketMiddleWare";
import { formMiddleWare } from "../../store/middleware/formMiddleWare";
import { HeaderMeta } from "./headerMeta";


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
            <HeaderMeta title={title} />
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