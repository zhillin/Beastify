import { GoodsData, GoodsObjectItm } from "../catalog/catalogType";

export type CardPageContext = {
    req: {
        url: string
    },
    params:{
        id: string
    },
};

export type PropsCard = {
    info: GoodsData,
    idPage: string,
};

export type PropsCardView = {
    info: GoodsObjectItm
};

// use Selectore object type
export type selectorType = 
    {[key: string]: GoodsObjectItm};

export type RefDivType =
    HTMLDivElement[] | null[];

export type RefImgType =
    HTMLImageElement[] | null[];

export type BigImgRefType = 
    {current: RefDivType};

export type SmallImgRefType = 
    {current: RefImgType};