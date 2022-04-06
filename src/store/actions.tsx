import { ActionCreator } from "redux";

// action name
export const VIEW_BASKET = 'VIEW_BASKET';
// action type
type BasketViewAction = {
    type: typeof VIEW_BASKET,
}
// action creator
export const basketView: ActionCreator<BasketViewAction> = () => ({
    type: VIEW_BASKET,
});


// action name
export const DATA_BASKET = 'DATA_BASKET';
// action type
type DataBasketAction = {
    type: typeof DATA_BASKET,
    value: Object,
}
// action creator
export const basketData: ActionCreator<DataBasketAction> = (value) => ({
    type: DATA_BASKET,
    value,
});


// action name
export const VIEW_BASKET_ORDER = 'VIEW_BASKET_ORDER';
// action type
type ViewBasketOrderAction = {
    type: typeof VIEW_BASKET_ORDER,
}
// action creator
export const basketViewOrder: ActionCreator<ViewBasketOrderAction> = () => ({
    type: VIEW_BASKET_ORDER
});
