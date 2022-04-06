import style from './orderBasket.module.css'
import { BasketGoods } from '../../basket/basketGoods/basketGoods';
import { useSelector } from 'react-redux';
import { MainState } from '../../../store/reducer';

const data = [1, 2, 3, 4, 5];

export function OrderBasket(){

    const basketOpen = useSelector<MainState, boolean>(state => state.basketViewOrder)

    const itemBasket = () =>
        data.map( obj => <BasketGoods key={obj}/> )

    return(
        <div className={style.order} data-open={basketOpen ? 'enable': 'disable'}>
            <div className={style.wrapper}>
                <p className={style.name}>basket</p>
                <div className={style.full}>
                    <div className={style.list} >
                        { itemBasket() }
                    </div>
                    <div className={style.footer}>
                        <div className={style.info}>
                            <p className={style.info_text}>Subtotal</p>
                            <p className={style.info_text}>125 000 <span data-rub>₽</span></p>
                        </div>
                        <div className={style.total}>
                            <p className={style.total_txt}>Total:</p>
                            <p className={style.total_txt}>125 000 <span data-rub>₽</span></p>
                        </div>
                    </div>
                </div>
                <div className={style.empty}>
                    <p className={style.empty_text}>You basket is empty</p>
                </div>
            </div>
        </div>
    )
}