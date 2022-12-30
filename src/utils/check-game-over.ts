import type { Board, Player } from "./store";

const sameValues = (space: number, values: number[]) => values.every((val) => val === space);

const checkVertical = (board: Board): Player => {
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      const space = board[r][c];
      const vals = [board[r - 1][c], board[r - 2][c], board[r - 3][c]];
      if (space && sameValues(space, vals)) return space;
    };
  };
};

const checkHorizontal = (board: Board): Player => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      const space = board[r][c];
      const vals = [board[r][c + 1], board[r][c + 2], board[r][c + 3]];
      if (space && sameValues(space, vals)) return space;
    };
  };
};

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

const checkDraw = (board: Board): boolean => {
  const rows = board.map((row) => row.every(Boolean));
  return rows.every(Boolean);
};

const checkForGameOver = (board: Board) => {
  const isWinner = checkVertical(board) || checkHorizontal(board) || checkDiaganols(board);
  // If someone won the game, return the winner.
  if (isWinner) return isWinner;

  // If the game is a draw, return true. If the game is not a draw, return false;
  return checkDraw(board);
};

export default checkForGameOver;