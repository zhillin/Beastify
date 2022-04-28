import { ActionCreator } from "redux";


// action name
export const VIEW_BASKET = 'VIEW_BASKET';
// action type
type BasketViewAction = {
    type: typeof VIEW_BASKET,
}
// action creator
export const basketView: ActionCreator<BasketViewAction> = (value) => ({
    type: VIEW_BASKET,
    value,
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
export const basketViewOrder: ActionCreator<ViewBasketOrderAction> = (value) => ({
    type: VIEW_BASKET_ORDER,
    value,
});


// action name
export const VIEW_MOBILE_MENU = 'VIEW_MOBILE_MENU';
// action type
type ViewMobileMenuAction = {
    type: typeof VIEW_MOBILE_MENU,
}
// action creator
export const viewMobileMenu: ActionCreator<ViewMobileMenuAction> = (value) => ({
    type: VIEW_MOBILE_MENU,
    value,
});


// action name
export const AMOUNT_DATA = 'AMOUNT_DATA';
// action type
type AmountData = {
    type: typeof AMOUNT_DATA,
}
// action creator
export const getAmountData: ActionCreator<AmountData> = (value) => ({
    type: AMOUNT_DATA,
    value,
});


// action name
export const GOODS_DATA = 'GOODS_DATA';
// action type
type GoodsData = {
    type: typeof GOODS_DATA,
}
// action creator
export const goodsDataAction: ActionCreator<GoodsData> = (value) => ({
    type: GOODS_DATA,
    value,
});


// action name
export const SHOW_CATALOG = 'SHOW_CATALOG';
// action type
type ShowCatalogType = {
    type: typeof SHOW_CATALOG,
}
// action creator
export const showCatalogAction: ActionCreator<ShowCatalogType> = (value) => ({
    type: SHOW_CATALOG,
    value,
});


// action name
export const CHANGE_FORM = 'CHANGE_FORM';
// action type
type ChangeFormType = {
    type: typeof CHANGE_FORM,
}
// action creator
export const changeFormAction: ActionCreator<ChangeFormType> = (value) => ({
    type: CHANGE_FORM,
    value,
});