import type { NextPage } from "next";
import Head from "next/head";
import "twin.macro";

import { MainMenu } from "../src/components/dialog";


const IndexPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ready to Connect 4?</title>
			</Head>
			<div tw="w-full min-h-screen flex items-center justify-center bg-purple-200">
				<MainMenu />
			</div>
		</>
	);
};

export default IndexPage;
