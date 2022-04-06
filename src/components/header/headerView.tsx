import style from './header.module.css'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { basketView, viewMobileMenu } from '../../store/actions';
import { HeadLogo } from './headerLogo/headerLogo';
import { MainState } from '../../store/reducer';

export function HeaderView(){

    // redux dispatch init
    const dispatch = useDispatch();

    const viewState = useSelector<MainState, boolean>(state => state.viewMobileMenu);

    // basket click
    const openBasket = () => {
        dispatch(basketView());
    }

    const openMobileMenu = () => {
        dispatch(viewMobileMenu());
    }

    return(
        <div className={style.header} data-menu={viewState}>
            <div className={style.wrap}>
                <Link href="/">
                    <div className={style.logo_wrap}>
                        <HeadLogo menu={viewState} />
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
                <div className={style.btn} onClick={openMobileMenu}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    );
}