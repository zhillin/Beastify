import { Layout } from "../src/components/layout/layout";
import { Order } from "../src/components/order/order";

export default function OrderPage(){
    return(
        <Layout title='Order' footerView='desk' headView={false}>
            <Order />
        </ Layout >
    )
}