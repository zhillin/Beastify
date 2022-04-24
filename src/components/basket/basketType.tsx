export type basketGoodsType = {
    data: {
        [key: string]: {
            amount: number
        }
    }, 
    subtotal: number
}

export type basketGoodsItmType = {
    id: string,
    img: string[],
    name: string,
    size: string,
    price: number,
    amount: number
}

export type basketGoodsObjType = {
    data: {
        [key: string]: basketGoodsItmType
    },
    subtotal: number,
}