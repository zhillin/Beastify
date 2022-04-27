import style from "../cardView/cardView.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export function CardSlider({image}: {image: string[]}){

    // img container block
    const imgContainer = () =>
        image.map( (obj, index) =>
            <SwiperSlide key={index} className={style.swiperSlide}>
                <div 
                    data-card={index} 
                    data-sb={index} 
                    className={style.item}
                >
                    <img src={`${obj}`} className={style.big_img} />
                </div>
            </SwiperSlide>
        )

    return(
        <div className={style.container}>
            <div data-card="view" className={style.wrapper}>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={'auto'}
                    className={style.swiper}
                    pagination={{ 
                        clickable: true,
                        bulletActiveClass: style.swiperBullet
                    }}
                >
                    {imgContainer()}
                </Swiper>
            </div>
        </div>
    )
}