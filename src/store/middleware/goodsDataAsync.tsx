import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { GoodsData } from "../../components/catalog/catalogType";
import { goodsDataAction } from "../actions";
import { MainState } from "../reducer";


// 
// Get missing objects from the server
// 
export const goodsDataAsync = (goodsId: number[]): ThunkAction<void, MainState, unknown, Action<string>> => {
    return async (dispatch, getState) => {
        // goods store
        const store = getState().goodsData;
        // serach id goods
        const stringId = serchElem(goodsId, store);
        // missing items
        if(stringId != ''){
            console.log('===== ADD STORE CLIENT AXIOS')
            // get goods post query
            const goodsResp = await getServerGoods(stringId);
            // add goods in store
            dispatch(goodsDataAction(goodsResp));
        }
        // all items in storage
        else{
            console.log('==== ALL ELEMENT IN STORE');
        }
    }
}

// serach id goods
const serchElem = (goodsId: number[], state: {[key: string]: object}) => {
    // sting id
    let id = "";
    // serach id undefined
    goodsId.map(obj => {
        // check id in state
        if( state[`${obj}`] == undefined){
            // add undefined id in string
            id = `${id}, ${obj}`;
        }
    });
    // format string id
    id = id.replace(/^.{2}/, '');
    // return string
    return id;
}

// get goods post query in server
const getServerGoods = async (stringId: string) => {
    // get goods post query
    const response = await axios.post<GoodsData>(
        `https://beastify.zhilin.one/api/case`,
        {id: stringId}
    );
    // responce data server
    const result = response.data;
    // goods object
    const goods: {[key: string]: object} = {};
    // create goods object
    result.data.map(itm => {
        goods[itm.id] = itm;
    })
    // return goods object
    return goods;
}
