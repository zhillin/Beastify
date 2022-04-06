import style from './slide.module.css'
import slide from '../../../public/img/slide_img.jpg'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

export function SliderView(){
    return(
        <div className={style.preview}>
                <Swiper
                    modules={[Autoplay,]}
                    autoplay={{
                        delay: 1500,
                    }}
                >
                    <SwiperSlide>
                        <img src={`${slide.src}`} className={style.obj} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`${slide.src}`} className={style.obj} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`${slide.src}`} className={style.obj} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`${slide.src}`} className={style.obj} />
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}