import CardView from "./cardView/cardView";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsDataAdd } from "../../store/middleware/goodsDataAdd";
import { MainState } from "../../store/reducer";
import { PropsCard, selectorType } from "./cardType";
import { GoodsObjectItm } from "../catalog/catalogType";
import { goodsDataAsync } from "../../store/middleware/goodsDataAsync";
import { useRouter } from "next/router";


export function Card({info, idPage}: PropsCard) {
    // dispatch
    const dispatch = useDispatch();
    // router
    const router = useRouter();
    // goods object
    let goods: GoodsObjectItm | null = null;
    // amount
    let amount: number | string = useSelector<MainState, number | string>(state => state.amountData)
    
    // logica render component
    const renderLogic = () => {
        // render client
        if(info == null) {
            // subscribe use selector
            const useElem = useSelector<MainState, selectorType>(state => state.goodsData);
            // get goods
            goods = useElem[idPage];
        }
        // render server
        else{
            // get goods
            goods = info.data[0];
        }
    }
    // 
    renderLogic();

    // redirect 404
    const notFoundRedirect = () => {
        if(amount != 0){
            if(Number(idPage) <= 0 || amount < Number(idPage) || amount == 'error'){
                router.push('/404')
            }
        }
    }
    // 
    notFoundRedirect();

    useEffect(() => {
        // render client
        if(info == null) {
            // goods id
            const idNumber = [Number(idPage)];
            // add goods in store
            dispatch(goodsDataAsync(idNumber));
        }
        // render server
        else{
            // add goods in redux if it is missing
            dispatch(goodsDataAdd(info));
        }
    });

    // return null
    return goods != null ? <CardView info={goods} /> : <><br/><br/><br/><br/><p>Загрузка</p></>
}