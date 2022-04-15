import { Catalog, PropsCatalog } from "../src/components/catalog/catalog";
import { PostCatalogContext, catalogServer } from "../src/components/catalog/catalogServer";
import { Layout } from "../src/components/layout/layout";
import { SliderView } from "../src/components/slider/sliderView";

const Home = ({goods}: PropsCatalog) => {
	return (
		<Layout title='Home'>
			<SliderView />
			<Catalog goods={goods}/>
		</ Layout>
	);
};

// fetch data from server
export async function getServerSideProps(context: PostCatalogContext) {
    return catalogServer(context);
}

export default Home;
