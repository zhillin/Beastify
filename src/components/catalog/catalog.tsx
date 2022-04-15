import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogData } from "../../store/actions";
import { MainState } from "../../store/reducer";
import { CatalogView } from "./catalogView/catalogView";

export type goodsData = {
    type: string,
    data: {
        id: string,
        name: string,
        size: string,
        price: number,
        img: string[],
    }[],
};

export type PropsCatalog = {
    goods: goodsData,
};

export function Catalog({goods}: PropsCatalog){
    // get redux state
    const viewState = useSelector<MainState, goodsData>(state => state.catalogData);
    // dispatch redux
    const dispatch = useDispatch()
    // add goods in redux
    useEffect(() => {
        // if goods came from server
        if(goods != null){
            dispatch(catalogData(goods));
        }
    },[goods]);
    // select data from server or redux
    const ItemData = goods != null ? goods : viewState;
    // render catalogView
    return <CatalogView goods={ItemData}/>
}