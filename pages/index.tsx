import { useEffect } from "react";
import { Catalog } from "../src/components/catalog/catalog";
import { catalogServer } from "../src/components/catalog/catalogServer";
import { PostCatalogContext, PropsCatalog } from "../src/components/catalog/catalogType";
import { Layout } from "../src/components/layout/layout";
import { SliderView } from "../src/components/slider/sliderView";

const Home = ({goodsServer}: PropsCatalog) => {
	return (
		<Layout title='Home'>
			<SliderView />
			<Catalog goodsServer={goodsServer}/>
		</ Layout>
	);
};

// fetch data from server
export async function getServerSideProps(context: PostCatalogContext) {
    return catalogServer(context);
}

export default Home;
