import { useSelector } from "react-redux";
import { MainState } from "../../store/reducer";
import { BasketView } from "./basketView/basketView";


export function Basket(){

    // get redux state basket View
    const basketView = useSelector<MainState, boolean>(state => state.basketView);

    return(
        basketView ? <BasketView /> : null
    )
}