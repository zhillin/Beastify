import { OrderBasket } from "./orderBasket/orderBasket";
import { OrderHead } from "./orderHead/orderHead";
import { OrderView } from "./orderView/orderView";

export function Order(){
    return(
        <>
            <OrderHead />
            <OrderView />
            <OrderBasket />
        </>
    )
}