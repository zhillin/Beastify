import Link from 'next/link';
import { useSelector } from 'react-redux';
import { MainState } from '../../store/reducer';
import style from './mobileMenu.module.css';


export function MobileMenuView(){

    const viewState = useSelector<MainState>(state => state.viewMobileMenu);

    const view = () =>
        <div className={style.list}>
            <div className={style.wrap}>
                <Link href="/">
                    <p className={style.text}>Main</p>
                </Link>
                <Link href="/info">
                    <p className={style.text}>Info</p>
                </Link>
            </div>
        </div>

    return viewState ? view() : null
}