import style from './orderView.module.css';
import check from '../../../../public/img/check_form.svg'
import { ChangeEvent, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formMiddleWare } from '../../../store/middleware/formMiddleWare';
import { MainState } from '../../../store/reducer';
import { FormaValueType } from '../orderType';
import { store } from '../../../../pages/_app';
import { basketMiddleWare } from '../../../store/middleware/basketMiddleWare';

export function OrderView({price}: {price: number}){

    const dispatch = useDispatch();
    // form value
    const formInput = useSelector<MainState, FormaValueType>(state => state.formValue.input);
    // form value
    const formCheck = useSelector<MainState, Boolean>(state => state.formValue.check);
    // listenet form validate change
    useSelector<MainState, string>(state => state.formValue.validate.message);
    // subscribe use selector
    const formValidate = store.getState().formValue.validate;

    // handler input
    const handlerInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        dispatch(
            formMiddleWare(
                e.target.value, 
                type, 
                'input'
            )
        );
    }

    // handler check
    const handlerCheck = () => {
        dispatch(
            formMiddleWare(
                '', 
                '', 
                'check'
            )
        );
    }

    // handler button
    const handlerBtn = () => {
        if(formValidate.state){
            // clear basket
            dispatch(basketMiddleWare('', 'clear'));
            // redirect
            document.location.href = 'https://www.sberbank.ru/ru/s_m_business/bankingservice/acquiring_total'
        }
    }

    // button txt
    const btnElem = () => {
        if(formValidate.state){
            return <p className={style.btn_text} >{formValidate.message} — {price.toLocaleString('ru')} <span data-rub="">₽</span></p>
        }else{
            return <p className={style.btn_text}>{formValidate.message}</p>
        }
    }

    // validate function
    useEffect(() => {
        dispatch(
            formMiddleWare(
                '', 
                '', 
                'validate'
            )
        );
    });

    return(
        <section className={style.main}>
            <div className={style.order}>
                <h2 className={style.title}>Order</h2>
                <p className={style.name}>Contact info</p>
                <div className={style.form}>
                    <form className={style.form_box}>
                        <input type="text" className={style.form_field} placeholder="name" value={formInput.name} onChange={(e)=> handlerInput(e, 'name')}/>
                        <input type="text" className={style.form_field} placeholder="last name" value={formInput.lastName} onChange={(e)=> handlerInput(e, 'lastName')}/>
                        <input type="tel" className={style.form_field} placeholder="phone" value={formInput.phone} onChange={(e)=> handlerInput(e, 'phone')}/>
                        <input type="email" className={style.form_field} placeholder="e-mail" value={formInput.email} onChange={(e)=> handlerInput(e, 'email')}/>
                        <input type="text" className={style.form_field} placeholder="country" value={formInput.country} onChange={(e)=> handlerInput(e, 'country')}/>
                        <input type="text" className={style.form_field} placeholder="city" value={formInput.city} onChange={(e)=> handlerInput(e, 'city')}/>
                        <input type="text" className={style.form_field} placeholder="address" value={formInput.address} onChange={(e)=> handlerInput(e, 'address')}/>
                        <input type="text" className={style.form_field} placeholder="index" pattern="[0-9]*" value={formInput.index} onChange={(e)=> handlerInput(e, 'index')}/>
                    </form>
                </div>
                <div className={style.info}>
                    <p className={style.info_title}>Delivery info</p>
                    <p className={style.info_desc}>Delivery is carried out by Express delivery to DHL, CDEK around the world as comfortable and safe as possible. <br /><br/>Delivery payment is made by customer upon receipt of the object*</p>
                    <br/>
                    <p className={style.info_desc}>Dollar exchange rate is calculated approximately</p>
                </div>
                <div className={style.check} onClick={handlerCheck}>
                    <div className={style.check_box}>
                        {formCheck ? <img src={check.src} className={style.check_img}/> : null}
                    </div>
                    <p className={style.check_txt}>i agree to the processing personal data</p>
                </div>
                <div
                    className={style.btn} 
                    data-success={formValidate.state ? 'enable' : 'disable'}
                    onClick = {handlerBtn}
                >
                    {btnElem()}
                </div>
            </div>
        </section>
    )
}