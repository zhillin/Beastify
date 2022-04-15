import axios from "axios";

// @ts-expect-error
export interface PostCatalogContext extends NextPageContext{
    req: {
        url: string
    },
    params:{
        id: string
    },
}

export const catalogServer = async (context: PostCatalogContext) => {
    // check first load page
    const checkClientSide = context.req.url.startsWith('/_next');
    // return null if the page is not loaded for the first
    if(checkClientSide){
        return { props: {
            goods: null
        }}
    }
    // number page
    // const idPage = Number(context.params.id);
    const dataApi = await axios.post(
        `https://beastify.zhilin.one/api/case`,
        {start: "1", end: "6"}
    );
    // response data props
    return { props: {
        goods: dataApi.data
    }}
}