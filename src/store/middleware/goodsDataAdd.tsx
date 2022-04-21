import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { goodsDataAction } from "../actions";
import { MainState } from "../reducer";


// 
// Add missing objects already received from the server
// 
export const goodsDataAdd = (goodsObject: {id: string}[]): ThunkAction<void, MainState, unknown, Action<string>> => {
    return async (dispatch) => {
        // goods object
        const goods: {[key: string]: object} = {};
        // create goods object
        goodsObject.map(itm => {
            goods[itm.id] = itm;
        })
        // add goods in store
        dispatch(goodsDataAction(goods));
    }
}