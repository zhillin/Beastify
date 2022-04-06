import CardView from "../../src/components/card/cardView";
import { Layout } from "../../src/components/layout/layout";
import style from "../../src/components/card/card.module.css";

export default function CardPageId(){
    return (
        <div className={style.card_container}>
            <Layout title='Info' footerView='desk'>
                <CardView />
            </ Layout >
        </div>
    )
}