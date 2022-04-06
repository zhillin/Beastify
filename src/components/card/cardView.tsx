import style from "./card.module.css";
import img from '../../../public/img/catalog_img.jpg'
import arrow from '../../../public/img/arrow_info.svg'
import { useRouter } from "next/router";

const number = [1, 2, 3, 4, 5, 6, 7];

export default function CardView(){

    const router = useRouter();

    // img left block
    const imgLeft = () =>
        number.map( obj =>
            <img src={`${img.src}`} data-card={obj} data-sa={obj} state-card="disable" className={style.small_img}  key={obj}/>
        )
    
    // img container block
    const imgContainer = () =>
        number.map( obj =>
            <div data-card={obj} data-sb={obj} className={style.item} key={obj}>
                <img src={`${img.src}`} className={style.big_img} />
            </div>
        )

    return (
        <>
            <div className={style.card}>
                <div className={style.left}>
                    { imgLeft() }
                </div>
                <div className={style.container}>
                    <div data-card="view" className={style.wrapper}>
                        { imgContainer() }
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.link} onClick={() => router.back()}>
                        <div className={style.link_emb}>
                            <img src={arrow.src} className={style.link_icon}/>
                        </div>
                            <p className={style.link_text}>Back to new arrivals</p>
                    </div>
                    <div className={style.info}>
                        <h2 className={style.title}>EASE BOOST</h2>
                        <div className={style.box}>
                            <p className={style.cost}>150000 <span data-rub>₽</span></p>
                            <p className={style.track}>SOLD OUT</p>
                        </div>
                        <p className={style.desc}>It turned out to be a modern Soviet hare! The past flowed into the present, something like teleportation. Color: silver | Size: 480х210х150mm | Polyester resin</p>
                    </div>
                    <div className={style.btn}>
                        <p className={style.card__btn}>buy for 125000 <span data-rub="">₽</span></p>
                        <p className={style.anhore}>If you have any questions – message to: info@beastify.shop</p>
                    </div>
                </div>
            </div>
        </>
    )
}