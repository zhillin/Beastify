import { useSelector } from "react-redux";
import { store } from "../../../pages/_app";
import { MainState } from "../../store/reducer";
import { basketGoodsObjType, basketGoodsType } from "../basket/basketType";
import { OrderBasket } from "./orderBasket/orderBasket";
import { OrderHead } from "./orderHead/orderHead";
import { OrderView } from "./orderView/orderView";

export function Order(){
    // basket goods
    const basketGoods = useSelector<MainState, basketGoodsType>(state => state.basketData);
    // subscribe use selector
    const useElem = store.getState().goodsData;
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
    
    return(
        <>
            <OrderHead />
            <OrderView price={basketGoodsObj.subtotal}/>
            <OrderBasket dataBasket={basketGoodsObj}/>
        </>
    )
    
}