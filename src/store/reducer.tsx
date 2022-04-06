import { Reducer } from "redux";
import { DATA_BASKET, VIEW_BASKET, VIEW_BASKET_ORDER } from "./actions";

// state type
export type MainState = {
    basketView: boolean,
    basketData: [],
    basketViewOrder: boolean,
}
// state start
const initialState: MainState = {
    basketView: false,
    basketData: [],
    basketViewOrder: false,
}

// reducer
export const mainReducer: Reducer<MainState> = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_BASKET:
            return {
                ...state,
                basketView: !state.basketView
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
        default:
            return state;
    }
}