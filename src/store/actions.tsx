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
export const basketViewOrder: ActionCreator<ViewBasketOrderAction> = () => ({
    type: VIEW_BASKET_ORDER
});


// action name
export const VIEW_MOBILE_MENU = 'VIEW_MOBILE_MENU';
// action type
type ViewMobileMenuAction = {
    type: typeof VIEW_MOBILE_MENU,
}
// action creator
export const viewMobileMenu: ActionCreator<ViewMobileMenuAction> = () => ({
    type: VIEW_MOBILE_MENU
});


// action name
export const CATALOG_DATA = 'CATALOG_DATA';
// action type
type CatalogData = {
    type: typeof CATALOG_DATA,
}
// action creator
export const catalogData: ActionCreator<CatalogData> = (value) => ({
    type: CATALOG_DATA,
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