import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import { Board } from "../svgs/boards";

//! ----------> TYPES <----------
//! ----------> STYLES <----------

//! ----------> COMPONENTS <----------
const GameBoard = () => {
  return (
    <div tw="w-full max-w-[39.5rem]">
      <Board />
    </div>
  );
};

export default GameBoard;