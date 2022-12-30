import tw, { styled } from "twin.macro";

import { SmallButton } from "./button";

//! ----------> TYPES <----------
type Props = {
  winner: 1 | 2;
  action: () => void;
};

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-[17.8125rem] h-40`};
  ${tw`bg-white text-black font-bold`};
  ${tw`rounded border-3 border-black shadow-black-lg`};
  ${tw`flex flex-col items-center justify-between py-4`};
`;

//! ----------> COMPONENTS <----------
const ResultCard = ({ winner, action }: Props) => {
  return (
    <Wrapper>
      <p tw="text-xs">PLAYER {winner}</p>
      <p tw="text-lg">WINS</p>
      <SmallButton label="PLAY AGAIN" onClick={action} />
    </Wrapper>
  );
};

export default ResultCard;
