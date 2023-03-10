import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import "twin.macro";

import GlobalStyles from "../styles/global-styles";
import "../public/fonts/space-grotesk/index.css";

/**
 * Usage of Emotion CacheProvider pulled from Twin.Macro documentation and example
 * https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/pages/_app.tsx
 */
function MyApp({ Component, pageProps }: AppProps) {
	/** Prevents hydration error introduced by React 18. */
	const [showChild, setShowChild] = useState<boolean>(false);

	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}

	if (typeof window === `undefined`) {
		return <></>;
	}

	return (
		<div tw="antialiased font-sans w-screen min-h-screen overflow-x-hidden bg-purple-100">
			<CacheProvider value={cache}>
				<GlobalStyles />
				<Component {...pageProps} />
			</CacheProvider>
		</div>
	);
}

export default MyApp;
