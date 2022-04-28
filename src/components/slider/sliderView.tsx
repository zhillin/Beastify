import style from './slideView.module.css'
import 'swiper/css';
import 'swiper/css/autoplay';

export function SliderView(){
    return(
        <div className={style.preview}>
            <video className={style.video} loop muted playsInline autoPlay src="https://beastify.zhilin.one/video/main.mp4" />
        </div>
    );
}