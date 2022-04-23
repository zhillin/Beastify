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
    brand: string,
    name: string,
    size: string,
    price: number,
    img: string[],
    remainder: number,
}

export type GoodsData = {
    type: string,
    amount: number,
    data: GoodsObjectItm[],
};

export type PropsCatalog = {
    goodsServer: GoodsData,
};

export type PropsCatalogView = {
    goods: {
        [key: string]: GoodsObjectItm
    },
    catalogShow: number,
};