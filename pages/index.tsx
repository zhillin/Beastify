import type { NextPage } from "next";
import { CatalogView } from "../src/components/catalog/catalogView";
import { Layout } from "../src/components/layout/layout";
import { SliderView } from "../src/components/slider/sliderView";


const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<SliderView />
			<CatalogView />
		</ Layout>
	);
};

export default Home;
