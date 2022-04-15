import style from './infoView.module.css';
import arrow from '../../../public/img/arrow_info.svg'
import Link from 'next/link';
import { useRouter } from 'next/router';

export function InfoView(){
    
    const router = useRouter();

    return(
        <section className={style.main}>
            <div className={style.info}>
                <div className={style.link}>
                    <div className={style.link_cont} onClick={() => router.back()}>
                        <img src={arrow.src} className={style.link_icon}/>
                        <p className={style.link_txt}>Back</p>
                    </div>
                </div>
                <div className={style.wrap}>
                    <p className={style.text}>Delivery is carried out by specialists in the field of international express delivery DHL, CDEK.</p>
                    <p className={style.subtext} >Delivery payment is made by customer upon receipt of the object*</p>
                </div>
                <div className={style.mail_cont}>
                    <p className={style.mail_coop}>For cooperation:</p>
                    <a className={style.mail_box}>
                        <p className={style.mail_text}>info@beastify.shop</p>
                    </a>
                    <a className={style.mail_box}>
                        <p className={style.mail_text}>+7 (111) 111-11-11</p>
                    </a>
                    <a className={style.mail_box} href="/doc/terms.pdf" target="_blank">
                        <p className={style.mail_text}>personal information</p>
                    </a>
                </div>
            </div>
        </section>
    )
}