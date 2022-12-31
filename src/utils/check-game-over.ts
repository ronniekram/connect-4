import type { Board, Player } from "./store";

const sameValues = (space: number, values: number[]) => values.every((val) => val === space);

/**
 * Check the board for a vertical win by iterating over the rows and columns, and checking if the
 * current space and the three spaces above it are the same.
 * @param {Board} board - Board
 * @returns The player who has won the game.
 */
const checkVertical = (board: Board): Player => {
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      const space = board[r][c];
      const vals = [board[r - 1][c], board[r - 2][c], board[r - 3][c]];
      if (space && sameValues(space, vals)) return space;
    };
  };
};

/**
 * Check each row for four in a row.
 * @param {Board} board - Board
 * @returns The player who has won the game.
 */
const checkHorizontal = (board: Board): Player => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      const space = board[r][c];
      const vals = [board[r][c + 1], board[r][c + 2], board[r][c + 3]];
      if (space && sameValues(space, vals)) return space;
    };
  };
};

/**
 * "Check the diagonals for a winner."
 * 
 * The function is a bit long, but it's not too complicated. It's just a bunch of loops
 * @param {Board} board - Board - the board we're checking
 * @returns The player who has won the game.
 */
const checkDiaganols = (board: Board): Player => {
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      const space = board[r][c];
      const vals = [board[r - 1][c + 1], board[r - 2][c + 2], board[r - 3][c + 3]];
      if (space && sameValues(space, vals)) return space;
    };

    for (let c = 3; c < 7; c++) {
      const space = board[r][c];
      const vals = [board[r - 1][c - 1], board[r - 2][c - 2], board[r - 3][c - 3]];
      if (space && sameValues(space, vals)) return space;
    };
  };
};

/**
 * It checks if all the rows in the board are filled with values
 * @param {Board} board - Board - this is the board that we're checking to see if it's a draw.
 * @returns A boolean value.
 */
const checkDraw = (board: Board): boolean => {
  const rows = board.map((row) => row.every(Boolean));
  return rows.every(Boolean);
};

/**
 * If someone won the game, return the winner. If the game is a draw, return true. If the game is not a
 * draw, return false
 * @param {Board} board - The current board state.
 * @returns A boolean value.
 */
const checkForGameOver = (board: Board) => {
  const isWinner = checkVertical(board) || checkHorizontal(board) || checkDiaganols(board);
  // If someone won the game, return the winner.
  if (isWinner) return isWinner;

  // If the game is a draw, return true. If the game is not a draw, return false;
  return checkDraw(board);
};

export default checkForGameOver;