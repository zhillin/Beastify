export type PostCatalogContext = {
    req: {
        url: string
    },
    params:{
        id: string
    },
}

export type GoodsObjectItm = {
    id: string,
    name: string,
    size: string,
    price: number,
    img: string[],
}

export type GoodsData = {
    type: string,
    data: GoodsObjectItm[],
};

export type PropsCatalog = {
    goodsServer: GoodsData,
};

export type PropsCatalogView = {
    goods: {
        [key: string]: GoodsObjectItm
    },
};