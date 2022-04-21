import style from "./cardView.module.css";
import img from '../../../../public/img/catalog_img.jpg';
import arrow from '../../../../public/img/arrow_info.svg';
import { useRouter } from "next/router";
import { PropsCardView } from "../cardType";

export default function CardView({info,}: PropsCardView){

    const
        router = useRouter(),
        image = info.img,
        name = info.name,
        size = info.size,
        price = info.price;

    // img left block
    const imgLeft = () =>
        image.map( (obj, index) =>
            <img src={`${obj}`} data-card={index} data-sa={index} state-card="disable" className={style.small_img}  key={index}/>
        )
    
    // img container block
    const imgContainer = () =>
        image.map( (obj, index) =>
            <div data-card={index} data-sb={index} className={style.item} key={index}>
                <img src={`${obj}`} className={style.big_img} />
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
                        <h2 className={style.title}>{name}</h2>
                        <div className={style.box}>
                            <p className={style.cost}>{price} <span data-rub>₽</span></p>
                            {/* <p className={style.track}>SOLD OUT</p> */}
                        </div>
                        <p className={style.desc}>size: {size}</p>
                    </div>
                    <div className={style.btn}>
                        <p className={style.card__btn}>buy for {price} <span data-rub="">₽</span></p>
                        <p className={style.anhore}>If you have any questions – message to: info@beastify.shop</p>
                    </div>
                </div>
            </div>
        </>
    )
}