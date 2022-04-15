import { Catalog, PropsCatalog } from "../../src/components/catalog/catalog";
import { PostCatalogContext, catalogServer } from "../../src/components/catalog/catalogServer";
import { Layout } from "../../src/components/layout/layout";

export default function CardPage({goods}: PropsCatalog){
    return (
		<Layout title='Card'>
			<Catalog goods={goods}/>
		</ Layout>
	);
}

// fetch data from server
export async function getServerSideProps(context: PostCatalogContext) {
    return catalogServer(context);
}