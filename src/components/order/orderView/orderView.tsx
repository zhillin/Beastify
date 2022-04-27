import style from './orderView.module.css';
import check from '../../../../public/img/check_form.svg'
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formMiddleWare } from '../../../store/middleware/formMiddleWare';
import { MainState } from '../../../store/reducer';
import { FormaValueType } from '../orderType';

export function OrderView({price}: {price: number}){

    const dispatch = useDispatch();
    // form value
    const basketGoods = useSelector<MainState, FormaValueType>(state => state.formValue);
    // handler input
    const handler = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        dispatch(
            formMiddleWare(
                e.target.value, 
                type, 
                'add'
            )
        );
    }

    return(
        <section className={style.main}>
            <div className={style.order}>
                <h2 className={style.title}>Order</h2>
                <p className={style.name}>Contact info</p>
                <div className={style.form}>
                    <form className={style.form_box}>
                        <input type="text" className={style.form_field} placeholder="name" value={basketGoods.name} onChange={(e)=> handler(e, 'name')}/>
                        <input type="text" className={style.form_field} placeholder="last name" value={basketGoods.lastName} onChange={(e)=> handler(e, 'lastName')}/>
                        <input type="tel" className={style.form_field} placeholder="phone" value={basketGoods.phone} onChange={(e)=> handler(e, 'phone')}/>
                        <input type="email" className={style.form_field} placeholder="e-mail" value={basketGoods.email} onChange={(e)=> handler(e, 'email')}/>
                        <input type="text" className={style.form_field} placeholder="country" value={basketGoods.country} onChange={(e)=> handler(e, 'country')}/>
                        <input type="text" className={style.form_field} placeholder="city" value={basketGoods.city} onChange={(e)=> handler(e, 'city')}/>
                        <input type="text" className={style.form_field} placeholder="address" value={basketGoods.address} onChange={(e)=> handler(e, 'address')}/>
                        <input type="text" className={style.form_field} placeholder="index" pattern="[0-9]*" value={basketGoods.index} onChange={(e)=> handler(e, 'index')}/>
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