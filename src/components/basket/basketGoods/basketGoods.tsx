import style from "./basketGoods.module.css"
import img from '../../../../public/img/catalog_img.jpg'
import close from '../../../../public/img/close_icon.svg'
import plus from '../../../../public/img/plus_icon.svg'
import minus from '../../../../public/img/minus_icon.svg'

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
                    <div className={style.nav}>
                        <div className={style.nav_icon}>
                            <img src={minus.src} alt="" />
                        </div>
                        <p className={style.nav_txt}>1</p>
                        <div className={style.nav_icon}>
                            <img src={plus.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}