import tw, { styled } from "twin.macro";

import { ButtonPlayers } from "./svgs/players";

//! ----------> TYPES <----------
const colors = {
  WHITE: tw`bg-white text-black`,
  PINK: tw`bg-pink-100 text-white`,
  YELLOW: tw`bg-yellow-100 text-black`,
};

type BasicProps = {
  label: string;
  onClick: () => void;
};

type Props = BasicProps & {
  color: keyof typeof colors;
  hasIcon?: boolean;
};

//! ----------> STYLES <----------
const Btn = styled.button`
	${tw`w-full h-[4.5rem]`};
	${tw`rounded-[20px] border-[3px] border-black`};
	${tw`font-bold text-md`};
	${tw`transition-all duration-300 ease-in-out`};
	box-shadow: 0px 10px 0px #000000;

	&:hover {
		${tw`border-purple-200`};
		box-shadow: 0px 10px 0px #5c2dd5;
	}
`;

const Small = styled.button`
	${tw`w-[5.375rem] h-10`};
	${tw`bg-purple-200 hover:(bg-pink-100)`};
	${tw`text-white text-xs font-bold`};
	${tw`rounded-[20px]`};
	${tw`transition-all duration-300 ease-in-out`};
`;

const Check = styled.button`
  ${tw`w-16 h-16 rounded-full`};
  ${tw`bg-pink-100 text-white`};
  ${tw`border-[3px] border-black`};
  ${tw`transition-all duration-300 ease-in-out`};
  box-shadow: 0px 5px 0px #000000;

  &:hover {
    ${tw`border-purple-200`};
    box-shadow: 0px 5px 0px #5C2DD5;
  }
`;

const withIcon = tw`flex justify-between items-center px-5`;

//! ----------> COMPONENTS <----------
export const SmallButton = ({ label, onClick }: BasicProps) => {
  return (
    <Small type="button" onClick={onClick}>
      {label}
    </Small>
  );
};

export const CheckButton = ({ label, onClick }: BasicProps) => {
  return (
    <Check type="button" onClick={onClick} aria-label={label}>
      <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11.5819L12.264 21.846L32.11 2" stroke="currentColor" stroke-width="3" />
      </svg>
    </Check>
  );
};

const Button = ({ label, color, onClick, hasIcon }: Props) => {
  return (
    <Btn type="button" onClick={onClick} css={[colors[color], hasIcon && withIcon]}>
      {hasIcon ? (
        <>
          <span>{label}</span>
          <ButtonPlayers />
        </>
      ) : (
        label
      )}
    </Btn>
  );
};

export default Button;
