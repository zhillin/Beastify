import { Catalog } from "../../src/components/catalog/catalog";
import { catalogServer } from "../../src/components/catalog/catalogServer";
import { PostCatalogContext, PropsCatalog } from "../../src/components/catalog/catalogType";
import { Layout } from "../../src/components/layout/layout";

export default function CardPage({goodsServer}: PropsCatalog){
    return (
		<Layout title='Card'>
			<Catalog goodsServer={goodsServer}/>
		</ Layout>
	);
}

// fetch data from server
export async function getServerSideProps(context: PostCatalogContext) {
    return catalogServer(context);
}