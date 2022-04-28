import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewMobileMenu } from '../../store/actions';
import { MainState } from '../../store/reducer';
import style from './mobileMenuView.module.css';


export function MobileMenuView(){

    // redux dispatch init
    const dispatch = useDispatch();

    const viewState = useSelector<MainState>(state => state.viewMobileMenu);

    const menuClose = () => {
        dispatch(viewMobileMenu(false));
    }

    const view = () =>
        <div className={style.list}>
            <div className={style.wrap}>
                <Link href="/">
                    <p className={style.text} onClick={menuClose}>Main</p>
                </Link>
                <Link href="/info">
                    <p className={style.text} onClick={menuClose}>Info</p>
                </Link>
            </div>
        </div>

    return viewState ? view() : null
}