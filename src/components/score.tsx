import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import { Smile, Frown } from "../svgs/players";

//! ----------> TYPES <----------
type Props = {
	player: 1 | 2;
};

//! ----------> STYLES <----------
const Wrapper = styled.div`
	${tw`w-[8.875rem] h-20`};
	${tw`md:(w-[17rem] h-[6.25rem])`};
	${tw`xl:(w-[8.8125rem] h-40)`};
	${tw`flex items-center justify-center`};
	${tw`xl:(flex-col)`};
	${tw`bg-white text-black font-bold`};
	${tw`rounded shadow-black-lg`};
`;

//! ----------> COMPONENTS <----------
const ScoreCard = ({ player }: Props) => {
	const { scores, gameOver, winner } = useGameStore();

	const frownConditions = gameOver && winner && winner !== player;

	return (
		<Wrapper css={[player === 2 && tw`flex-row-reverse`]}>
			<div css={[player === 1 ? tw`-ml-6 xl:(ml-0)` : tw`-mr-6 xl:(mr-0)`]} tw="xl:(-mt-6)">
				{frownConditions ? <Frown yellow={player === 2} /> : <Smile yellow={player === 2} />}
			</div>
			<div tw="md:(flex items-center space-x-5)">
				<p tw="text-xs md:(text-sm)">PLAYER {player}</p>
				<p tw="text-[32px] md:(text-lg)">{scores[player]}</p>
			</div>
		</Wrapper>
	);
};

export default ScoreCard;
