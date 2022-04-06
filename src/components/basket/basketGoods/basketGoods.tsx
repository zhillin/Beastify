import style from "./basketGoods.module.css"
import img from '../../../../public/img/catalog_img.jpg'
import close from '../../../../public/img/close_icon.svg'

export function BasketGoods(){
    return(
        <div className={style.goods}>
            <img src={img.src} className={style.image} />
            <div className={style.box}>
                <div className={style.block}>
                    <div className={style.info}>
                        <h4 className={style.name}>TOY HIPPO USSR</h4>
                        <p className={style.txt}>Color: red orange | Size: 410х280х210mm | Polyester resin</p>
                    </div>
                    <img src={close.src} className={style.icon}/>
                </div>
                <div className={style.cost}>
                    <p className={style.price}>125000 <span data-rub>₽</span></p>
                </div>
            </div>
        </div>
    )
}