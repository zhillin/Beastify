import style from './orderHead.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { basketViewOrder } from '../../../store/actions';
import { HeadLogo } from '../../header/headerLogo/headerLogo';
import { MainState } from '../../../store/reducer';
import { useEffect } from 'react';

export function OrderHead(){

    const dispatch = useDispatch();
    const basketOpen = useSelector<MainState, boolean>(state => state.basketViewOrder)

    const buttonText = basketOpen ? 'Close basket' : 'View basket';

    // change state mobile basket
    const basketHandler = () => {
        dispatch(basketViewOrder(!basketOpen));
    }

    // close mobile basket
    useEffect(() => {
     return () => {
        dispatch(basketViewOrder(false))
     }   
    },[])

    return(
        <div className={style.header}>
            <div className={style.wrap}>
                <Link href="/">
                    <div>
                        <HeadLogo type="color"/>
                    </div>
                </Link>
                <p className={style.button} onClick={basketHandler}>{buttonText}</p>
            </div>
        </div>
    )
}