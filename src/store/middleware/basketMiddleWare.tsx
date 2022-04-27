import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { GoodsObjectItm } from "../../components/catalog/catalogType";
import { basketData, basketView } from "../actions";
import { MainState } from "../reducer";
import { goodsDataAsync } from "./goodsDataAsync";


type ObjectBasketType = {[key: string]: {amount: number}}

// sumAndLocalStorage calculate
const sumAndLocalStorage = (basket: ObjectBasketType, goods: {[key: string]: GoodsObjectItm}) => {

    // conver json in string
    const basketObjectJson = JSON.stringify(basket);
    // add in localstorage
    localStorage.setItem("basket", basketObjectJson);
    // localstorage key 
    let localStoreKey = 'success';

    // price var 
    let price = 0;
    // calculate total
    for(let key in basket){
        if(goods[key] != undefined){
            price += basket[key].amount * goods[key].price;
        }else{
            localStoreKey = 'error'
        }
    }

    // return price
    return localStoreKey == 'success' ? price : 0;
}


//
// Add or remove goods in basket and change amount goods
//

export const basketMiddleWare = (
    // id goods
    idGoods: string, 
    // type operation
    type: 'add' | 'remove' | 'plus' | 'minus' | 'localStorage',
    // options additional param
    options?: string,
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
                        subtotal: sumAndLocalStorage(addObj, goodsData),
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
                    subtotal: sumAndLocalStorage(removeObj, goodsData),
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
                    subtotal: sumAndLocalStorage(plusObj, goodsData),
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
                    subtotal: sumAndLocalStorage(minusObj, goodsData),
                }
            ));
        }

        // get data in local storage
        const getDataInLocalStorage = () => {
            // localstorage check
            if(localStorage.basket != undefined){
                // local storage goods to basket
                const getLocalStore = JSON.parse(localStorage.basket);
                // array in id goods
                let localArray = [];
                // id goods in array
                for(let key in getLocalStore){
                    localArray.push(Number(key));
                }
                // dispatch state in reducer
                if(options != 'responseServer'){
                    // check goods in storage
                    dispatch(goodsDataAsync(localArray, 'basket'));   
                }else{
                    // add goods in basket when data received from the server
                    dispatch(basketData(
                        {
                            data: getLocalStore,
                            subtotal: sumAndLocalStorage(getLocalStore, goodsData),
                        }
                    ));
                }
            }
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
            minusOperation();
        }
        // get data in local storage
        if(type == 'localStorage'){
            getDataInLocalStorage();
        }
    }
}