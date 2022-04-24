import style from './orderBasket.module.css'
import { BasketGoods } from '../../basket/basketGoods/basketGoods';
import { useSelector } from 'react-redux';
import { MainState } from '../../../store/reducer';
import { basketGoodsObjType } from '../../basket/basketType';

export function OrderBasket({dataBasket}: {dataBasket: basketGoodsObjType}){
    // open basket state
    const basketOpen = useSelector<MainState, boolean>(state => state.basketViewOrder);
    // goods in basket
    const goodsObject = dataBasket.data;
    // price in basket
    const subtotal = dataBasket.subtotal;

    // goods item JSX element
    const item = () => {
        // jsx array
        let itmJsx = [];
        // add JSX goods item in array
        for(let key in goodsObject){
            itmJsx.push(
                <BasketGoods goodsItm={goodsObject[key]} key={key}/>
            )
        }
        // return JSX
        return itmJsx;
    }

    return(
        <div className={style.order} data-open={basketOpen ? 'enable': 'disable'}>
            <div className={style.wrapper}>
                <p className={style.name}>basket</p>
                <div className={style.full}>
                    <div className={style.list} >
                        { item() }
                    </div>
                    <div className={style.footer}>
                        <div className={style.total}>
                            <p className={style.total_txt}>Sum:</p>
                            <p className={style.total_txt}>{subtotal} <span data-rub>₽</span></p>
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