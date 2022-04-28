import { Reducer } from "redux";
import { catalogItmNum } from "../components/catalog/catalog";
import { GoodsObjectItm } from "../components/catalog/catalogType";
import { FormaValueType } from "../components/order/orderType";
import { 
    AMOUNT_DATA,
    CHANGE_FORM,
    DATA_BASKET,
    GOODS_DATA,
    SHOW_CATALOG,
    VIEW_BASKET,
    VIEW_BASKET_ORDER,
    VIEW_MOBILE_MENU
} from "./actions";

// state type
export type MainState = {
    basketView: boolean,
    basketData: {
        data: {
            [key: string]: {
                amount: number
            }
        },
        subtotal: number,
    },
    basketViewOrder: boolean,
    viewMobileMenu: boolean,
    amountData: number | string,
    catalogShow: number,
    goodsData: {
        [key: string]: GoodsObjectItm
    },
    formValue: {
        input: FormaValueType,
        validate: {
            state: boolean,
            message: string,
        }
        check: boolean,
    }
}

// state start
const initialState: MainState = {
    basketView: false,
    basketData: {
        data: {},
        subtotal: 0,
    },
    basketViewOrder: false,
    viewMobileMenu: false,
    amountData: 0,
    catalogShow: catalogItmNum,
    goodsData: {},
    formValue: {
        input: {
            name: '',
            lastName: '',
            phone: '',
            email: '',
            country: '',
            city: '',
            address: '',
            index: '',
        },
        validate: {
            state: false,
            message: '',
        },
        check: true,
    }
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
                basketViewOrder: action.value
            }
        case VIEW_MOBILE_MENU:
            return {
                ...state,
                viewMobileMenu: action.value
            }
        case AMOUNT_DATA:
            return {
                ...state,
                amountData: action.value
            }
        case GOODS_DATA:
            return {
                ...state,
                goodsData: {...state.goodsData, ...action.value}
            }
        case SHOW_CATALOG:
            return {
                ...state,
                catalogShow: action.value
            }
        case CHANGE_FORM:
            return {
                ...state,
                formValue: action.value
            }
        default:
            return state;
    }
}