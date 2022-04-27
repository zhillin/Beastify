import style from './orderView.module.css';
import check from '../../../../public/img/check_form.svg'
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export function OrderView({price}: {price: number}){

    const [value, useValue] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        address: '',
        index: '',
    });

    console.log(value);

    const handler = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        // controller form
        switch (type) {
            case 'name':
                useValue(() => ({...value, name: e.target.value}))
              break;
            case 'lastName':
                useValue(() => ({...value, lastName: e.target.value}))
              break;
            case 'phone':
                useValue(() => ({...value, phone: e.target.value}))
              break;
            case 'email':
                useValue(() => ({...value, email: e.target.value}))
              break;
            case 'country':
                useValue(() => ({...value, country: e.target.value}))
              break;
            case 'city':
                useValue(() => ({...value, city: e.target.value}))
              break;
            case 'address':
                useValue(() => ({...value, address: e.target.value}))
              break;
            case 'index':
                useValue(() => ({...value, index: e.target.value}))
              break;
            default:
                null
        }
    }

    return(
        <section className={style.main}>
            <div className={style.order}>
                <h2 className={style.title}>Order</h2>
                <p className={style.name}>Contact info</p>
                <div className={style.form}>
                    <form className={style.form_box}>
                        <input type="text" className={style.form_field} placeholder="name" value={value.name} onChange={(e)=> handler(e, 'name')}/>
                        <input type="text" className={style.form_field} placeholder="last name" value={value.lastName} onChange={(e)=> handler(e, 'lastName')}/>
                        <input type="tel" className={style.form_field} placeholder="phone" value={value.phone} onChange={(e)=> handler(e, 'phone')}/>
                        <input type="email" className={style.form_field} placeholder="e-mail" value={value.email} onChange={(e)=> handler(e, 'email')}/>
                        <input type="text" className={style.form_field} placeholder="country" value={value.country} onChange={(e)=> handler(e, 'country')}/>
                        <input type="text" className={style.form_field} placeholder="city" value={value.city} onChange={(e)=> handler(e, 'city')}/>
                        <input type="text" className={style.form_field} placeholder="address" value={value.address} onChange={(e)=> handler(e, 'address')}/>
                        <input type="text" className={style.form_field} placeholder="index" pattern="[0-9]*" value={value.index} onChange={(e)=> handler(e, 'index')}/>
                    </form>
                </div>
                <div className={style.info}>
                    <p className={style.info_title}>Delivery info</p>
                    <p className={style.info_desc}>Delivery is carried out by Express delivery to DHL, CDEK around the world as comfortable and safe as possible. <br /><br/>Delivery payment is made by customer upon receipt of the object*</p>
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
                    <p className={style.btn_text}>checkout {price} <span data-rub="">₽</span></p>
                </div>
            </div>
        </section>
    )
}