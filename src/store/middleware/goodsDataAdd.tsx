import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAmountData, goodsDataAction } from "../actions";
import { MainState } from "../reducer";


// 
// Add missing objects already received from the server
// 

type goodsDataAddType = {
    data: {id: string}[],
    amount: number,
}

export const goodsDataAdd = (info: goodsDataAddType): ThunkAction<void, MainState, unknown, Action<string>> => {
    return async (dispatch, getState) => {
        // goods object
        const goods: {[key: string]: object} = {};
        // create goods object
        info.data.map(itm => {
            goods[itm.id] = itm;
        });
        // add goods in store
        dispatch(goodsDataAction(goods));
        // add goods amount
        if(getState().amountData == 0){
            dispatch(getAmountData(info.amount));
        }
    }
}