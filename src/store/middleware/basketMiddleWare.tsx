import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { GoodsObjectItm } from "../../components/catalog/catalogType";
import { basketData, basketView } from "../actions";
import { MainState } from "../reducer";


type ObjectBasketType = {[key: string]: {amount: number}}

// Sum calculate
const sum = (basket: ObjectBasketType, goods: {[key: string]: GoodsObjectItm}) => {
    // price var 
    let price = 0;
    // calculate total
    for(let key in basket){
        price += basket[key].amount * goods[key].price;
    }
    // return price
    return price;
}


//
// Add or remove goods in basket and change amount goods
//

export const basketMiddleWare = (
    // id goods
    idGoods: string, 
    // type operation
    type: 'add' | 'remove' | 'plus' | 'minus'
    // =======
): ThunkAction<void, MainState, unknown, Action<string>> => {
    // =======
    return async (dispatch, getState) => {
        // get goods in basket
        const basketDataObj: ObjectBasketType = getState().basketData.data;
        // get goods in storage
        const goodsData = getState().goodsData;

        // add goods in basket function
        const addOperation = () => {
            // copy object basketDataObj
            let addObj = {
                ...basketDataObj
            }
            // check goods in basker
            if(addObj[idGoods] == undefined){
                // add goods in object
                addObj[idGoods] = {
                    amount: 1,
                }
                // dispatch state in reducer
                dispatch(basketData(
                    {
                        data: addObj,
                        subtotal: sum(addObj, goodsData),
                    }
                ));
            }
            // open basket
            dispatch(basketView(true));
        }

        // remove goods in basket
        const removeOperation = () => {
            // copy object basketDataObj
            let removeObj = {
                ...basketDataObj
            }
            // remove goods in object
            delete removeObj[idGoods];
            // dispatch state in reducer
            dispatch(basketData(
                {
                    data: removeObj,
                    subtotal: sum(removeObj, goodsData),
                }
            ));
        }

        // plus goods in basket
        const plusOperation = () => {
            // copy object basketDataObj
            let plusObj: { [key: string]: {amount: number} } = {
                ...basketDataObj
            }
            // plus goods in object
            if(plusObj[idGoods].amount < goodsData[idGoods].remainder){
                plusObj[idGoods].amount++;
            }
            // dispatch state in reducer
            dispatch(basketData(
                {
                    data: plusObj,
                    subtotal: sum(plusObj, goodsData),
                }
            ));
        }

        // minus goods in basket
        const minusOperation = () => {
            // copy object basketDataObj
            let minusObj: { [key: string]: {amount: number} } = {
                ...basketDataObj
            }
            // plus goods in object
            if(minusObj[idGoods].amount > 1){
                minusObj[idGoods].amount--;
            }
            // dispatch state in reducer
            dispatch(basketData(
                {
                    data: minusObj,
                    subtotal: sum(minusObj, goodsData),
                }
            ));
        }

        // add goods in basket
        if(type == 'add'){
            addOperation();
        }
        // remove goods in basket
        if(type == 'remove'){
            removeOperation();
        }
        // plus goods in basket
        if(type == 'plus'){
            plusOperation();
        }
        // minus goods in basket
        if(type == 'minus'){
            minusOperation()
        }
    }
}