import style from "./basketView.module.css"
import { useDispatch } from "react-redux";
import { basketView } from "../../../store/actions";
import Link from "next/link";
import { BasketGoods } from "../basketGoods/basketGoods";

const data = [1, 2, 3, 4, 5, 6];

export function BasketView(){

    // redux dispatch init
    const dispatch = useDispatch();

    // close basket
    let closeBasket = () => {
        dispatch(basketView());
    }

    const item = () =>
        data.map( obj => <BasketGoods key={obj} /> );

    return (
        <div className={style.basket}>
            <div className={style.wrapper}>
                <div className={style.top}>
                    <div className={style.top_txt}>basket (1)</div>
                    <a className={style.top_icon} onClick={closeBasket}>Close</a>
                </div>
                <div className={style.roll}>
                    <div className={style.list}>
                        { item() }
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.bottom_box}>
                        <div className={style.bottom_txt}>Subtotal:</div>
                        <p className={style.bottom_price}>125 000 <span data-rub>₽</span></p>
                    </div>
                    <Link href="/order">
                        <p className={style.bottom_btn}>Checkout</p>
                    </Link>
                </div>
                <div className={style.empty}>
                    <div className={style.empty_txt}>Basket is empty</div>
                </div>
            </div>
        </div>
    )
}