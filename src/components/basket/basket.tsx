import { useSelector } from "react-redux";
import { store } from "../../../pages/_app";
import { MainState } from "../../store/reducer";
import { basketGoodsObjType, basketGoodsType } from "./basketType";
import { BasketView } from "./basketView/basketView";


export function Basket(){
    // get redux state basket View
    const basketView = useSelector<MainState, boolean>(state => state.basketView);
    // basket goods
    const basketGoods = useSelector<MainState, basketGoodsType>(state => state.basketData);
    // subscribe use selector
    const useElem = store.getState().goodsData;
    // check basket state view == true
    if( basketView ){
        // create basket object
        let basketGoodsObj: basketGoodsObjType = {
            data: {},
            subtotal: basketGoods.subtotal,
        };
        // add goods in basket object
        for (let itm in basketGoods.data) {
            basketGoodsObj.data[itm] = {
                ...useElem[itm],
                amount: basketGoods.data[itm].amount
            };
        }
        // render
        return <BasketView dataBasket={basketGoodsObj}/>
    }else{
        return null;
    }
}