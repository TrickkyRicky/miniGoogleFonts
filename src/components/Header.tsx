import React, { Dispatch, FC } from "react";
import { FBox } from "../styles";

interface IHeader {
  input: string;
  setInput: Dispatch<string>;
  fontSearch: string;
  setFontSearch: Dispatch<string>;
}

const Header: FC<IHeader> = ({
  input,
  setInput,
  fontSearch,
  setFontSearch,
}) => {
  return (
    <FBox>
      <input
        onChange={(e) => setFontSearch(e.target.value)}
        value={fontSearch}
      />
      <input onChange={(e) => setInput(e.target.value)} value={input} />
    </FBox>
  );
};

export default Header;
