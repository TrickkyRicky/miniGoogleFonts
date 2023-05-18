import React, { Dispatch, FC } from "react";
import { FBox } from "../styles";
import Slider from "@mui/material/Slider";

interface IHeader {
  input: string;
  setInput: Dispatch<string>;
  fontSearch: string;
  setFontSearch: Dispatch<string>;
  fontSize: number;
  setFontSize: Dispatch<number>;
}

const Header: FC<IHeader> = ({
  input,
  setInput,
  fontSearch,
  setFontSearch,
  fontSize,
  setFontSize,
}) => {
  return (
    <FBox>
      <input
        onChange={(e) => setFontSearch(e.target.value)}
        value={fontSearch}
      />
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <Slider
        size="small"
        value={fontSize}
        onChange={(e: any) => setFontSize(e.target.value)}
        step={1}
        max={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </FBox>
  );
};

export default Header;
