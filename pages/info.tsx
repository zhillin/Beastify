import { InfoView } from "../src/components/info/infoView";
import { Layout } from "../src/components/layout/layout";
import style from "../src/components/info/infoView.module.css";


export default function InfoPage(){
    return(
        <div className={style.container_info}>
            <Layout title='Info'>
                <InfoView />
            </ Layout >
        </div>
    )
}