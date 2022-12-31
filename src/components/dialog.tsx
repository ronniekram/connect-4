import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

import { useWindowSize } from "../utils/use-window-size";
import Button, { CheckButton, colors as buttonColors } from "./button";
import Logo from "../svgs/logo";

//! ----------> TYPES <----------
const colors = {
	WHITE: tw`bg-white text-black`,
	PURPLE: tw`bg-purple-100 text-white`,
};

type Props = {
	titleText: string;
	color: keyof typeof colors;
	children: JSX.Element;
	hasButton?: boolean;
	buttonClick?: () => void;
};

type PauseProps = {
	buttons: {
		action: () => void;
		label: string;
		color: keyof typeof buttonColors;
	}[];
};

//! ----------> STYLES <----------
const Wrapper = styled.dialog`
	${tw`w-full md:(w-[30rem]) min-h-[27.1875rem]`};
	${tw`flex flex-col justify-center`};
	${tw`rounded-[40px] border-3 border-black`};
	${tw`px-5 py-8 md:(px-10 py-12)`};
	${tw`shadow-black-lg`};
`;

const OL = styled.ol`
	${tw`flex flex-col space-y-2.5`};
	${tw`list-inside list-none`};
	counter-reset: rules;

	li {
		${tw`text-xs font-medium`};
		counter-increment: rules;

		&::before {
			${tw`text-xs font-bold mr-5`};
			content: "0" counter(rules);
		}
	}
`;

const H2 = tw.h2`text-purple-100 text-sm font-bold mb-4`;
const P = tw.p`text-xs font-medium`;

//! ----------> COMPONENTS <----------
export const Dialog = ({ titleText, color, children, hasButton, buttonClick }: Props) => {
	return (
		<Wrapper css={[colors[color]]}>
			<h1 tw="font-bold text-lg mb-8 md:(mb-11)">{titleText}</h1>
			{children}
			{hasButton && buttonClick && (
				<div tw="-mb-8">
					<CheckButton onClick={buttonClick} label="Close dialog" />
				</div>
			)}
		</Wrapper>
	);
};

export const RulesDialog = ({ close }: { close: () => void }) => {
	return (
		<Dialog titleText="RULES" color="WHITE" buttonClick={close} hasButton>
			<div tw="flex flex-col space-y-8">
				<div>
					<H2>OBJECTIVES</H2>
					<P>
						Be the first player to connect 4 of the same colored discs in a row (either vertically,
						horizontally, or diagonally).
					</P>
				</div>

				<div>
					<H2>HOW TO PLAY</H2>
					<OL>
						<li>Player Red always goes first in the first game.</li>
						<li>Players must alternate turns.</li>
						<li>Only one disc can be dropped each turn.</li>
						<li>If your timer runs out before you make a move, you lose the game.</li>
						<li>The game ends when there is a 4-in-a-row or a stalemate.</li>
						<li>The starting player of the previous game goes second in the next game.</li>
					</OL>
				</div>
			</div>
		</Dialog>
	);
};

export const PauseDialog = ({ buttons }: PauseProps) => {
	return (
		<Dialog titleText="PAUSED" color="PURPLE">
			<div tw="flex flex-col space-y-2.5">
				{buttons.map((button, i) => (
					<div key={`pause-menu-${i}`}>
						<Button label={button.label} color={button.color} onClick={button.action} />
					</div>
				))}
			</div>
		</Dialog>
	);
};

export const MainMenu = () => {
	const router = useRouter();

	const { width } = useWindowSize();

	return width < 500 ? (
		<div tw="flex flex-col space-y-20 items-center w-screen px-5">
			<div tw="w-16 h-16">
				<Logo />
			</div>
			<div tw="w-full flex flex-col space-y-5 text-black">
				<Button
					label="PLAY VS PLAYER"
					onClick={() => router.push(`/play`)}
					color="YELLOW"
					hasIcon
				/>
				<Button label="RULES" onClick={() => console.log(`Open dem rules up tho.`)} color="WHITE" />
			</div>
		</div>
	) : (
		<Wrapper css={[colors.PURPLE]}>
			<div tw="flex flex-col space-y-20 items-center">
				<div tw="w-16 h-16">
					<Logo />
				</div>
				<div tw="w-full flex flex-col space-y-5 text-black">
					<Button
						label="PLAY VS PLAYER"
						onClick={() => router.push(`/play`)}
						color="YELLOW"
						hasIcon
					/>
					<Button
						label="RULES"
						onClick={() => console.log(`Open dem rules up tho.`)}
						color="WHITE"
					/>
				</div>
			</div>
		</Wrapper>
	);
};
