import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import { SmallButton } from "./button";

//! ----------> STYLES <----------
const Wrapper = styled.div`
	${tw`relative z-20`};
	${tw`w-[17.8125rem] h-40`};
	${tw`bg-white text-black font-bold`};
	${tw`rounded border-3 border-black shadow-black-lg`};
	${tw`flex flex-col items-center justify-between py-4`};
`;

//! ----------> COMPONENTS <----------
const ResultCard = () => {
	const { resetGame, winner } = useGameStore();

	return (
		<Wrapper>
			<p tw="text-xs">{winner ? `PLAYER ${winner}` : `NO WINNER`}</p>
			<p tw="text-lg">{winner ? `WINS` : `DRAW`}</p>
			<SmallButton label="PLAY AGAIN" onClick={resetGame} />
		</Wrapper>
	);
};

export default ResultCard;
