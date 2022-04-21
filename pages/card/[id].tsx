import { Layout } from "../../src/components/layout/layout";
import style from "../../src/components/card/cardView/cardView.module.css";
import { Card } from "../../src/components/card/card";
import router from "next/router";
import { cardServer } from "../../src/components/card/cardServer";
import { CardPageContext, PropsCard } from "../../src/components/card/cardType";

export default function CardPageId({info, idPage}: PropsCard){
    // id page
    const idPageRout = idPage != null ? idPage : router.query.id;
    // component
    return (
        <div className={style.card_container}>
            <Layout title='Info' footerView='desk'>
                <Card info={info} idPage={`${idPageRout}`}/>
            </ Layout >
        </div>
    )
}

// fetch data from server
export async function getServerSideProps(context: CardPageContext) {
    return cardServer(context);
}

