import style from './header.module.css'
import logo from '../../../public/img/logo.svg'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { basketView } from '../../store/actions';
import { HeadLogo } from './headerLogo/headerLogo';

export function HeaderView(){

    // redux dispatch init
    const dispatch = useDispatch();

    // basket click
    let openBasket = () => {
        // run action
        dispatch(basketView());
    }

    return(
        <div className={style.header}>
            <div className={style.wrap}>
                <Link href="/">
                    <div className={style.logo_wrap}>
                        <HeadLogo />
                    </div>
                </Link>
                <div className={style.list}>
                    <Link href="/">
                        <p className={style.item} >Main</p>
                    </ Link>
                    <Link href="/info">
                        <p className={style.item} >Info</p>
                    </Link>
                </div>
                <p className={style.basket} onClick={openBasket}>basket (1)</p>
                <div className={style.btn}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    );
}