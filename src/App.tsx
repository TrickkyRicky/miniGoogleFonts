import { useState, useEffect } from "react";
import { data } from "./data";
import { IFontData } from "./types";

const URL = "https://www.googleapis.com/webfonts/v1/webfonts?key=";
const App = () => {
  const [fonts, setFonts] = useState<IFontData>();
  useEffect(() => {
    const getData = async () => {
      // const data = await fetch(URL + import.meta.env.VITE_GOOGLE_API_KEY);
      // setFonts(await data.json());
      setFonts(data);
    };
    getData();
  }, []);
  console.log("THE FONTS::: ", fonts);
  return <div></div>;
};

export default App;
