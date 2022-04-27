import style from "./basketView.module.css"
import { useDispatch } from "react-redux";
import { basketView } from "../../../store/actions";
import Link from "next/link";
import { BasketGoods } from "../basketGoods/basketGoods";
import { useEffect } from "react";
import { basketGoodsObjType } from "../basketType";


export function BasketView({dataBasket}: {dataBasket: basketGoodsObjType}){
    // redux dispatch init
    const dispatch = useDispatch();
    // goods in basket
    const goodsObject = dataBasket.data;
    // price in basket
    const subtotal = dataBasket.subtotal;

    // close basket
    const closeBasket = () => {
        dispatch(basketView(false));
    };
    // close basket if component unmount
    useEffect(()=>{
        return () => closeBasket();
    },[]);

    // goods item JSX element
    const item = () => {
        // jsx array
        let itmJsx = [];
        // add JSX goods item in array
        for(let key in goodsObject){
            itmJsx.push(
                <BasketGoods goodsItm={goodsObject[key]} key={key}/>
            )
        }
        // return JSX
        return itmJsx;
    }
    
    // number goods in basket 
    const basketNumber = () => Object.keys(goodsObject).length;

    const basketCheckEmpty = () => {
        // not empty JSX
        const notEmptyJsx =
            <>
                <div className={style.roll}>
                    <div className={style.list}>
                        { [...item()] }
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.bottom_box}>
                        <div className={style.bottom_txt}>Sum:</div>
                        <p className={style.bottom_price}>{subtotal} <span data-rub>₽</span></p>
                    </div>
                    <Link href="/order">
                        <p className={style.bottom_btn}>Checkout</p>
                    </Link>
                </div>
            </>;
        // empty JSX
        const emptyJSX =
            <div className={style.empty}>
                <div className={style.empty_txt}>Basket is empty</div>
            </div>
        // return
        if(basketNumber() != 0){
            return(notEmptyJsx)
        }else{
            return emptyJSX;
        }
    }

    return (
        <div className={style.basket}>
            <div className={style.wrapper}>
                <div className={style.top}>
                    <div className={style.top_txt}>basket ({basketNumber()})</div>
                    <a className={style.top_icon} onClick={closeBasket}>Close</a>
                </div>
                { basketCheckEmpty() }
            </div>
        </div>
    )
}