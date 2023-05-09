import { useState, useEffect } from "react";
import { data } from "./data";
import { IFontData } from "./types";
import { FBox, Grid } from "./styles";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";

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
  return (
    <FBox fd="column">
      <Nav />
      <Header />
      <Grid>
        {fonts?.items.map((item) => (
          <Card />
        ))}
      </Grid>
    </FBox>
  );
};

export default App;
