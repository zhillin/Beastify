import { Reducer } from "redux";
import { GoodsData, GoodsObjectItm } from "../components/catalog/catalogType";
import { 
    CATALOG_DATA,
    DATA_BASKET,
    GOODS_DATA,
    VIEW_BASKET,
    VIEW_BASKET_ORDER,
    VIEW_MOBILE_MENU
} from "./actions";

// state type
export type MainState = {
    basketView: boolean,
    basketData: [],
    basketViewOrder: boolean,
    viewMobileMenu: boolean,
    catalogData: GoodsData,
    goodsData: {
        [key: string]: GoodsObjectItm
    }
}

// state start
const initialState: MainState = {
    basketView: false,
    basketData: [],
    basketViewOrder: false,
    viewMobileMenu: false,
    catalogData: {
        type: '',
        data: [],
    },
    goodsData: {},
}

// reducer
export const mainReducer: Reducer<MainState> = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_BASKET:
            return {
                ...state,
                basketView: action.value
            }
        case DATA_BASKET:
            return {
                ...state,
                basketData: action.value
            }
        case VIEW_BASKET_ORDER:
            return {
                ...state,
                basketViewOrder: !state.basketViewOrder
            }
        case VIEW_MOBILE_MENU:
            return {
                ...state,
                viewMobileMenu: !state.viewMobileMenu
            }
        case CATALOG_DATA:
            return {
                ...state,
                catalogData: action.value
            }
        case GOODS_DATA:
            return {
                ...state,
                goodsData: {...state.goodsData, ...action.value}
            }
        default:
            return state;
    }
}