import CardView from "./cardView/cardView";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsDataAdd } from "../../store/middleware/goodsDataAdd";
import { MainState } from "../../store/reducer";
import { PropsCard } from "./cardType";
import { GoodsObjectItm } from "../catalog/catalogType";
import { goodsDataAsync } from "../../store/middleware/goodsDataAsync";


export function Card({info, idPage}: PropsCard) {
    // dispatch
    const dispatch = useDispatch();
    // goods object
    let goods: GoodsObjectItm | null = null;
    
    const renderLogic = () => {
        // render client
        if(info == null) {
            // use Selectore object type
            type selectorType = {[key: string]: GoodsObjectItm};
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

    renderLogic();

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