import style from './orderView.module.css';
import check from '../../../../public/img/check_form.svg'

export function OrderView(){
    return(
        <section className={style.main}>
            <div className={style.order}>
                <h2 className={style.title}>Order</h2>
                <p className={style.name}>Contact info</p>
                <div className={style.form}>
                    <form className={style.form_box}>
                        <input type="text" className={style.form_field} placeholder="name" />
                        <input type="text" className={style.form_field} placeholder="last name" />
                        <input type="tel" className={style.form_field} placeholder="phone" />
                        <input type="email" className={style.form_field} placeholder="e-mail" />
                        <input type="text" className={style.form_field} placeholder="country" />
                        <input type="text" className={style.form_field} placeholder="city" />
                        <input type="text" className={style.form_field} placeholder="address" />
                        <input type="text" className={style.form_field} placeholder="index" pattern="[0-9]*" />
                    </form>
                </div>
                <div className={style.info}>
                    <p className={style.info_title}>Delivery info</p>
                    <p className={style.info_desc}>Delivery is carried out by Express delivery to DHL, CDEK around the world as comfortable and safe as possible. <br />Delivery payment is made by customer upon receipt of the object*</p>
                    <br/>
                    <p className={style.info_desc}>Individual entrepreneur Musin Erik Ilmirovich, OGRNIP 318784700344890, e-mail address: info@erikmusin.in, <br />+7 985 400-79-99</p>
                    <br/>
                    <p className={style.info_desc}>Dollar exchange rate is calculated approximately</p>
                </div>
                <div className={style.check}>
                    <div className={style.check_box}>
                        <img src={check.src} className={style.check_img}/>
                    </div>
                    <p className={style.check_txt}>i agree to the processing personal data</p>
                </div>
                <div className={style.btn}>
                    <p className={style.btn_text}>checkout 125 000 <span data-rub="">₽</span></p>
                </div>
            </div>
        </section>
    )
}