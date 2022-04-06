import style from './orderHead.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { basketViewOrder } from '../../../store/actions';
import { HeadLogo } from '../../header/headerLogo/headerLogo';

export function OrderHead(){

    const dispatch = useDispatch();

    const basketHandler = () => {
        dispatch(basketViewOrder());
    }

    return(
        <div className={style.header}>
            <div className={style.wrap}>
                <Link href="/">
                    <div>
                        <HeadLogo type="color"/>
                    </div>
                </Link>
                <p className={style.button} onClick={basketHandler}>View basket</p>
            </div>
        </div>
    )
}