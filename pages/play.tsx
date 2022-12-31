import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import "twin.macro";

import useGameStore from "../src/utils/store";

import GameBoard from "../src/components/board";
import ScoreCard from "../src/components/score";
import ResultCard from "../src/components/result";
import TurnMarker from "../src/components/turn-marker";
import { SmallButton } from "../src/components/button";
import Logo from "../src/svgs/logo";


const PlayPage: NextPage = () => {
  const [endTime, setEndTime] = useState<number>(+new Date() + 30000);
  const { resetGame, gameOver, currentPlayer } = useGameStore();

  useEffect(() => setEndTime(+new Date() + 30000), [currentPlayer]);

  return (
    <>
      <Head>
        <title>CONNECT 4!</title>
      </Head>
      <div tw="w-screen flex flex-col items-center py-14">
        {/* MAIN NAV-ISH THING */}
        <div tw="w-full max-w-[39.5rem] flex items-center justify-between px-5 mb-10 md:(px-0)">
          <SmallButton label="MENU" onClick={() => console.log(`Menu`)} />

          <div tw="w-11 h-11 md:(w-14 h-14)">
            <Logo />
          </div>

          <SmallButton label="RESTART" onClick={resetGame} />
        </div>

        {/* MOBILE & TABLET SCORES */}
        <div tw="w-full max-w-[39.5rem] flex items-center justify-between px-2 mb-14 md:(px-0)">
          <ScoreCard player={1} />
          <ScoreCard player={2} />
        </div>

        {/* GAME BOARD */}
        <GameBoard />

        {/* MARKER/RESULT */}
        <div tw="-mt-10">
          {gameOver ? <ResultCard /> : <TurnMarker endTime={endTime} />}
        </div>
      </div>
    </>
  );
};

export default PlayPage;
