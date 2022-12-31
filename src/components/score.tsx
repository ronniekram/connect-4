import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import { Smile, Frown } from "../svgs/players";

//! ----------> TYPES <----------
type Props = {
	player: 1 | 2;
};

//! ----------> STYLES <----------
const Wrapper = styled.div`
	${tw`w-[8.875rem] h-24 relative`};
	${tw`md:(w-[17rem] h-[6.25rem])`};
	${tw`flex items-center justify-center`};
	${tw`bg-white text-black font-bold`};
	${tw`border-3 border-black rounded shadow-black-lg`};
`;

//! ----------> COMPONENTS <----------
const ScoreCard = ({ player }: Props) => {
	const { scores, gameOver, winner } = useGameStore();

	const frownConditions = gameOver && winner && winner !== player;

	return (
		<Wrapper css={[player === 2 && tw`flex-row-reverse`]}>
			<div tw="absolute" css={[player === 1 ? tw`-left-7` : tw`-right-7`]}>
				{frownConditions ? <Frown yellow={player === 2} /> : <Smile yellow={player === 2} />}
			</div>
			<div
				tw="md:(flex items-center justify-between w-[13.0625rem])"
				css={[player === 2 && tw`md:(flex-row-reverse mr-7)`, player === 1 && tw`md:(ml-7)`]}
			>
				<p tw="text-xs md:(text-sm)">PLAYER {player}</p>
				<p tw="text-[32px] text-center md:(text-lg text-left)">{scores[player]}</p>
			</div>
		</Wrapper>
	);
};

export default ScoreCard;
