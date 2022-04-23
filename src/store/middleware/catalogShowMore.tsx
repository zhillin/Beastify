import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { catalogItmNum } from "../../components/catalog/catalog";
import { showCatalogAction } from "../actions";
import { MainState } from "../reducer";
import { goodsDataAsync } from "./goodsDataAsync";


//
// Click button "show more" in catalog page
//

export const catalogShowMore = (): ThunkAction<void, MainState, unknown, Action<string>> => {
    return async (dispatch, getState) => {
        // const
        const 
            catalogShow = getState().catalogShow,
            amountNumber = getState().amountData;
        // show goods
        if(catalogShow != amountNumber){
            // show id
            let showId = [];
            // add id
            for(let i = 1; i <= 4; i++){
                if(catalogShow + i <= amountNumber){
                    showId.push(catalogShow + i);
                }
            }
            // get goods in server
            dispatch(goodsDataAsync(showId));
            // dispatch show id
            dispatch(showCatalogAction(
                showId[showId.length - 1]
            ));
        }
        // hide goods
        else{
            // dispatch show id
            dispatch(showCatalogAction(catalogItmNum));
        }
    }
}