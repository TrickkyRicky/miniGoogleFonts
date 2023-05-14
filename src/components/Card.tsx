import React, { FC } from "react";
import { FBox } from "../styles";
import { styled } from "styled-components";

interface ICard {
  input: string;
  fontSize: string;
  color: string;
  fontFamily: string;
  fontFile: string;
}
type TWord = Pick<ICard, "color" | "fontFamily" | "fontSize" | "fontFile">;

const Word = styled.h4<TWord>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  @font-face {
    font-family: ${({ fontFamily }) => fontFamily};
    src: url(${({ fontFile }) => fontFile});
  }
`;

const FontName = styled.h2`
  color: silver;
  font-size: 18px;
`;

const Card: FC<ICard> = ({
  input,
  fontSize,
  color = "white",
  fontFamily,
  fontFile,
}) => {
  return (
    <FBox
      border="1px solid white"
      w="100%"
      h="250px"
      br="10px"
      p="10px 0px 0px 10px"
      fd="column"
    >
      <FontName>{fontFamily}</FontName>
      <Word
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        fontFile={fontFile}
      >
        {input}
      </Word>
    </FBox>
  );
};

export default Card;
