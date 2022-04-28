import style from "./cardView.module.css";
import arrow from '../../../../public/img/arrow_info.svg';
import { useRouter } from "next/router";
import { PropsCardView } from "../cardType";
import { basketMiddleWare } from "../../../store/middleware/basketMiddleWare";
import { useDispatch } from "react-redux";
import { CardGalery } from "../cardGallery/cardGalery";
import { useEffect, useState } from "react";
import { CardSlider } from "../cardSlider/cardSlider";


export default function CardView({info}: PropsCardView){

    // state screen
    const [screen, setScreen] = useState('');
    // dispatch redux
    const dispatch = useDispatch();
    // data
    const
        router = useRouter(),
        image = info.img,
        name = info.name,
        size = info.size,
        price = info.price,
        brand = info.brand;

    // change state type screen
    const sizeWindow = () => {
        // width screen page
        const width = innerWidth;
        // desktop state
        if(width > 990 && screen != 'desktop'){
            setScreen('desktop');
        }
        // mobile state
        if(width <= 990 && screen != 'mobile'){
            setScreen('mobile');
        }
    }

    useEffect(()=>{
        // start state
        sizeWindow();
        // mount component
        window.addEventListener('resize', sizeWindow)
        // unmount component
        return () => {
            window.removeEventListener('resize', sizeWindow)
        }
    },[screen])

    // price and button JSX
    const priceAndBtn = () => {
        if(info.remainder != 0){
            return {
                price: 
                    <p className={style.cost} >{price.toLocaleString('ru')} <span data-rub>₽</span></p>,
                btn: 
                    <p className={style.card__btn} onClick={ () => dispatch( basketMiddleWare(info.id, 'add') ) }>
                        buy for {price.toLocaleString('ru')} <span data-rub="">₽</span>
                    </p>
            }
        }else{
            return {
                price: 
                    <p className={style.track}>SOLD OUT</p>,
                btn: 
                    <p className={style.anhore}>If you have any questions – message to: info@beastify.shop</p>
            }
        }
    }

    return (
        <>
            <div className={style.card}>
                {
                    screen == 'desktop' ? 
                    <CardGalery image={image}/> : 
                    <CardSlider image={image} />
                }
                <div className={style.right}>
                    <div className={style.link} onClick={() => router.back()}>
                        <div className={style.link_emb}>
                            <img src={arrow.src} className={style.link_icon}/>
                        </div>
                            <p className={style.link_text}>Back to new arrivals</p>
                    </div>
                    <div className={style.info}>
                        <h2 className={style.title}>{brand}</h2>
                        <p className={style.name} >{name}</p>
                        <div className={style.box}>
                            { priceAndBtn().price }
                        </div>
                        <p className={style.desc}>size: {size}</p>
                    </div>
                    <div className={style.btn}>
                        { priceAndBtn().btn }
                    </div>
                </div>
            </div>
        </>
    )
}