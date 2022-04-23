import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsDataAdd } from "../../store/middleware/goodsDataAdd";
import { goodsDataAsync } from "../../store/middleware/goodsDataAsync";
import { MainState } from "../../store/reducer";
import { GoodsObjectItm, PropsCatalog } from "./catalogType";
import { CatalogView } from "./catalogView/catalogView";

export const catalogItmNum = 8;

export const catalogItmID = () => {
    // catalog list id
    const id = [];
    // create catalog list id
    for(let i = 1; i <= catalogItmNum; i++){
        id.push(i);
    }
    // 
    return id;
};

export function Catalog({goodsServer}: PropsCatalog){
    // dispatch
    const dispatch = useDispatch();
    // use Selectore object type
    type selectorType = {[key: string]: GoodsObjectItm};
    // subscribe use selector
    const useElem = useSelector<MainState, selectorType>(state => state.goodsData);
    // amount number
    const catalogShow = useSelector<MainState, number>(state => state.catalogShow);
    // goods object
    let goods: selectorType = {};
    // useElem check
    let useElemCheck = JSON.stringify(useElem) != '{}';


    // select n elements in goods object
    const goodsShow = (objects: selectorType) => {
        // object sort
        let showObject: selectorType = {};
        // sort goods object
        for (let i = 1; i <= catalogShow; i++) {
            // add data in show object
            if(objects[`${i}`] != undefined){
                showObject[`${i}`] = objects[`${i}`];
            }
        }
        // change data in goods object 
        return showObject;
    }


    // 
    const renderLogic = () => {
        // render client
        if(useElemCheck) {
            // 
            goods = goodsShow(useElem);
        }
        // render server
        else{
            // goods object
            const goodsParce: selectorType = {};
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
        if(useElemCheck) {
            // if it is missing in store
            dispatch(
                // action get data in server
                goodsDataAsync(
                    // catalog id
                    catalogItmID()
                )
            )
        }
        // render server
        else{
            dispatch(goodsDataAdd(goodsServer));
        }
    });

    // console.log(goods);

    if(JSON.stringify(goods) != '{}'){
        return <CatalogView goods={goods} catalogShow={catalogShow}/>
    }else{
        return <><br/><br/><br/><br/><p>Загрузка</p></>
    }
}