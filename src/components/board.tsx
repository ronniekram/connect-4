import tw, { styled } from "twin.macro";

import useGameStore from "../utils/store";
import { Board, Black, White } from "../svgs/boards";
import { PlayerChip } from "../svgs/players";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
const Grid = styled.div`
  ${tw`w-full h-full`};
  ${tw`absolute top-[7px] z-[-1]`};
  ${tw`px-2.5 pt-2.5 pb-7 md:(px-2.5 pb-[56px])`};
  ${tw`grid grid-cols-7 grid-rows-6 md:(gap-x-1 gap-y-3)`};
  ${tw`place-content-center`};
`;

//! ----------> COMPONENTS <----------
const GameBoard = () => {
  const { board } = useGameStore();
  return (
    <div tw="w-full h-[fit-content] relative z-10 max-w-[39.5rem]">
      <div tw="w-full absolute top-1 z-[-2] opacity-0">
        <Black />
      </div>

      <div tw="w-full opacity-100">
        <White />
      </div>

      <Grid>
        {board.map((row) => {
          return row.map((col) => (
            <div tw="" css={[col === 1 ? tw`text-pink-100` : tw`text-yellow-100`]}>
              {col && <PlayerChip />}
            </div>
          ))
        })}
      </Grid>
    </div>
  );
};

export default GameBoard;