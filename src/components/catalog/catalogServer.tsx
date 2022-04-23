import axios from "axios";
import { catalogItmID } from "./catalog";
import { PostCatalogContext } from "./catalogType";


export const catalogServer = async (context: PostCatalogContext) => {
    // check first load page
    const checkClientSide = context.req.url.startsWith('/_next');
    // return null if the page is not loaded for the first
    if(checkClientSide){
        return { props: {
            goods: null
        }}
    }
    // requset data from server 
    const dataApi = await axios.post(
        `https://beastify.zhilin.one/api/case`,
        {id: `${catalogItmID()}`}
    );
    // response data props
    return { props: {
        goodsServer: dataApi.data
    }}
}