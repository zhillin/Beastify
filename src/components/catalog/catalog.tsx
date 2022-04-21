import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsDataAdd } from "../../store/middleware/goodsDataAdd";
import { goodsDataAsync } from "../../store/middleware/goodsDataAsync";
import { MainState } from "../../store/reducer";
import { GoodsObjectItm, PropsCatalog } from "./catalogType";
import { CatalogView } from "./catalogView/catalogView";


export function Catalog({goodsServer}: PropsCatalog){
    // dispatch
    const dispatch = useDispatch();
    // goods object
    let goods: {[key: string]: GoodsObjectItm} = {};
    
    const renderLogic = () => {
        // render client
        if(goodsServer == null) {
            // use Selectore object type
            type selectorType = {[key: string]: GoodsObjectItm};
            // subscribe use selector
            const useElem = useSelector<MainState, selectorType>(state => state.goodsData);
            // get goods
            goods = useElem;            
        }
        // render server
        else{
            // goods object
            const goodsParce: {[key: string]: GoodsObjectItm} = {};
            // create goods object
            goodsServer.data.map(itm => {
                goodsParce[itm.id] = itm;
            })
            // get goods
            goods = goodsParce;
        }
    }

    renderLogic();

    useEffect(() => {
        // render client
        if(goodsServer == null) {
            // if it is missing in store
            dispatch(goodsDataAsync([1, 2, 3, 4, 5, 6, 7, 8]))
        }
        // render server
        else{
            // add goods in redux if it is missing
            dispatch(goodsDataAdd(goodsServer.data))
        }
    });

    if(JSON.stringify(goods) != '{}'){
        return <CatalogView goods={goods}/>
    }else{
        return <><br/><br/><br/><br/><p>Загрузка</p></>
    }
}