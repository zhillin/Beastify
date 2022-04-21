import axios from "axios";
import { CardPageContext } from "./cardType";


export const cardServer = async (context: CardPageContext) => {
    // check first load page
    const checkClientSide = context.req.url.startsWith('/_next');
    // return null if the page is not loaded for the first
    if(checkClientSide){
        return { props: {
            info: null
        }}
    }
    // number page
    const idPage = context.params.id;
    // requset data from server
    const dataApi = await axios.post(
        `https://beastify.zhilin.one/api/case`,
        {start: idPage, end: idPage}
    );
    // response data props
    return { props: {
        info: dataApi.data,
        idPage,
    }}
}