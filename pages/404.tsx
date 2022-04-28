import { HeaderMeta } from "../src/components/layout/headerMeta";
import { NotFoundView } from "../src/components/notFound/notFoundView";

export default function NotFoundPage(){
    return (
        <>
            <HeaderMeta title={'404'} />
            <NotFoundView />
        </>
    )
}