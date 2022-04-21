import { GoodsData, GoodsObjectItm } from "../catalog/catalogType";

export type CardPageContext = {
    req: {
        url: string
    },
    params:{
        id: string
    },
}

export type PropsCard = {
    info: GoodsData,
    idPage: string,
};

export type PropsCardView = {
    info: GoodsObjectItm
}