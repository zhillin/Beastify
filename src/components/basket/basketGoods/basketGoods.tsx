import style from "./basketGoods.module.css"
// import Image from 'next/image'
import close from '../../../../public/img/close_icon.svg'
import plus from '../../../../public/img/plus_icon.svg'
import minus from '../../../../public/img/minus_icon.svg'
import { useDispatch } from "react-redux"
import { basketMiddleWare } from "../../../store/middleware/basketMiddleWare"
import { basketGoodsItmType } from "../basketType"


export function BasketGoods({goodsItm}: {goodsItm: basketGoodsItmType}){
    // redux dispatch init
    const dispatch = useDispatch();
    // data goods
    const 
        id = goodsItm.id,
        img = goodsItm.img[0],
        name = goodsItm.name,
        size = goodsItm.size,
        price = goodsItm.price,
        amount = goodsItm.amount;

    // remove goods in basket 
    const closeBtnClick = () => {
        dispatch( basketMiddleWare(id, 'remove') );
    }
    // plus amount goods
    const plusBtnClick = () => {
        dispatch( basketMiddleWare(id, 'plus') );
    }
    // minus amount goods
    const minusBtnClick = () => {
        dispatch( basketMiddleWare(id, 'minus') );
    }

    return(
        <div className={style.goods}>
            <img src={img} className={style.image} />
            {/* <Image src={img} width={1031} height={773} className={style.image}/> */}
            <div className={style.box}>
                <div className={style.block}>
                    <div className={style.info}>
                        <h4 className={style.name}>{name}</h4>
                        <p className={style.txt}>{size}</p>
                    </div>
                    <img src={close.src} className={style.icon} onClick={closeBtnClick}/>
                </div>
                <div className={style.cost}>
                    <p className={style.price}>{price} <span data-rub>₽</span></p>
                    <div className={style.nav}>
                        <div className={style.nav_icon} onClick={minusBtnClick}>
                            <img src={minus.src} alt="" />
                        </div>
                        <p className={style.nav_txt}>{amount}</p>
                        <div className={style.nav_icon} onClick={plusBtnClick}>
                            <img src={plus.src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}