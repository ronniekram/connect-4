import create from "zustand";

const cleanBoard = [
	new Array(7).fill(null),
	new Array(7).fill(null),
	new Array(7).fill(null),
	new Array(7).fill(null),
	new Array(7).fill(null),
	new Array(7).fill(null),
];

export type Player = null | 1 | 2;
export type Board = Player[][];

type GameStore = {
	// NUM GAMES PLAYED - used to track which player should go first
	gameNum: number;
	setGameNum: () => void;
	// BOARD
	board: Board;
	updateBoard: (board: Board) => void;
	// PLAYERS
	currentPlayer: 1 | 2;
	togglePlayer: () => void;
	winner: Player;
	setWinner: (player: Player) => void;
	// SCORES
	scores: {
		"1": number;
		"2": number;
	};
	setScores: (player: 1 | 2) => void;
	// GAME OVER
	gameOver: boolean;
	setGameOver: (arg: boolean) => void;
	// RESET GAME
	resetGame: () => void;
};

const useGameStore = create<GameStore>((set, get) => ({
	gameNum: 1,
	setGameNum: () => set((state) => ({ gameNum: state.gameNum + 1 })),
	board: cleanBoard,
	updateBoard: (board: Board) => set({ board }),
	currentPlayer: 1,
	togglePlayer: () => set((state) => ({ currentPlayer: state.currentPlayer === 1 ? 2 : 1 })),
	winner: null,
	setWinner: (player: Player) => set({ winner: player }),
	scores: {
		"1": 0,
		"2": 0,
	},
	setScores: (player: 1 | 2) => {
		const scores = get().scores;
		const scoreP1 = { "1": scores["1"] + 1 };
		const scoreP2 = { "2": scores["2"] + 1 };

		const updatedScore = player === 1 ? scoreP1 : scoreP2;

		set((state) => ({
			scores: {
				...state.scores,
				...updatedScore,
			},
		}));
	},
	gameOver: false,
	setGameOver: (arg: boolean) => set({ gameOver: arg }),
	resetGame: () =>
		set((state) => ({
			board: cleanBoard,
			currentPlayer: state.gameNum % 2 === 0 ? 2 : 1,
			winner: null,
			timer: 30,
			gameOver: false,
		})),
}));

export default useGameStore;
