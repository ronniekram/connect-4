import { useState, MouseEvent } from "react";
import useMeasure from "react-use-measure";
import { inRange, findKey } from "lodash";
import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import checkForGameOver from "../utils/check-game-over";
import { Black, White } from "../svgs/boards";
import { PlayerChip } from "../svgs/players";

//! ----------> STYLES <----------
const Grid = styled.div`
	${tw`w-full h-full`};
	${tw`absolute top-[7px] z-[-1]`};
	${tw`px-2.5 pt-2.5 pb-7 md:(px-2.5 pb-[56px])`};
	${tw`grid grid-rows-6 grid-cols-7 md:(gap-x-1 gap-y-3)`};
	${tw`place-content-center`};
`;

//! ----------> COMPONENTS <----------
const GameBoard = () => {
	const [ref, bounds] = useMeasure();
	const { board, currentPlayer, gameOver, updateBoard, togglePlayer, setGameOver, setWinner } =
		useGameStore();

	const [currentCol, setCurrentCol] = useState<number>(0);
	const [currentX, setCurrentX] = useState<number>(bounds.x);

	const leftEdge = bounds.left;
	const colWidth = bounds.width / 7;

	const getCoords = (col: number) => {
		if (col === 0) {
			return [leftEdge, leftEdge + colWidth];
		}
		return [leftEdge + colWidth * col + 1, leftEdge + colWidth * (col + 1)];
	};

	const columnCoords = {
		0: getCoords(0),
		1: getCoords(1),
		2: getCoords(2),
		3: getCoords(3),
		4: getCoords(4),
		5: getCoords(5),
		6: getCoords(6),
	};

	/**
	 * It takes a mouse event, sets the currentX state variable to the mouse's x coordinate, and then sets
	 * the currentCol state variable to the column number of the mouse's x coordinate
	 * @param {MouseEvent} event - MouseEvent - this is the event that is passed to the function when the
	 * mouse moves.
	 */
	const findBoardCoords = (event: MouseEvent) => {
		setCurrentX(event.clientX);

		const col = findKey(columnCoords, (col) => inRange(event.clientX, col[0], col[1]));
		if (inRange(+col, 0, 7)) setCurrentCol(+col);
	};

	/**
	 * It checks if the current column is full, if it is, it returns. If it isn't, it finds the first empty
	 * row in the current column, updates the board with the current player's token, checks if the game is
	 * over, and if it isn't, it toggles the current player
	 * @returns the index of the row that is not occupied by a piece.
	 */
	const turn = () => {
		const findRow = () => {
			for (let i = board.length - 1; i >= 0; i--) {
				if (!board[i][currentCol]) return board.indexOf(board[i]);
			}
			return;
		};

		if (!findRow()) return;

		const rowIdx = findRow();
		const toUpdate = [...board];
		toUpdate[rowIdx][currentCol] = currentPlayer;
		updateBoard(toUpdate);

		const game = checkForGameOver(board);

		if (game) {
			setGameOver(true);
			if (game === 1 || game === 2) {
				setWinner(game);
			}
		} else {
			togglePlayer();
		}
	};

	return (
		<div tw="w-full h-[fit-content] relative z-10 max-w-[39.5rem]">
			<div tw="w-full absolute top-1 z-[-2] opacity-0">
				<Black />
			</div>

			<div
				tw="w-full relative"
				ref={ref}
				onMouseOver={findBoardCoords}
				onFocus={() => console.log(`fokay.`)}
			>
				<White />
				<Grid tw="z-0!">
					{board.flat().map((space, i) => {
						return (
							<button
								key={`space-${i}`}
								type="button"
								tw="w-full h-full"
								disabled={gameOver}
								onClick={turn}
							></button>
						);
					})}
				</Grid>
			</div>

			<Grid>
				{board.map((row, i) => {
					return row.map((col, j) => (
						<div
							tw="transition-all duration-300 ease-in-out"
							key={`marker-${i}`}
							css={[
								col === 1
									? tw`text-pink-100`
									: col === 2
									? tw`text-yellow-100`
									: tw`text-purple-100`,
							]}
						>
							<PlayerChip />
						</div>
					));
				})}
			</Grid>
		</div>
	);
};

export default GameBoard;
