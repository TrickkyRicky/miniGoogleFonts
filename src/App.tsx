import { useState, useEffect, lazy, Suspense } from "react";
import { data } from "./data";
import { IFontData } from "./types";
import { FBox, Grid } from "./styles";
import Nav from "./components/Nav";
import Header from "./components/Header";

const URL = "https://www.googleapis.com/webfonts/v1/webfonts?key=";
const Card = lazy(() => import("./components/Card"));
const App = () => {
  const [fonts, setFonts] = useState<IFontData>();
  const [fontSize, setFontSize] = useState(18);
  const [input, setInput] = useState("LlamaLicker");
  const [fontSearch, setFontSearch] = useState("");
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
      <Header
        input={input}
        setInput={setInput}
        fontSearch={fontSearch}
        setFontSearch={setFontSearch}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <Grid>
        {fonts?.items
          .slice(0, 10)
          .filter((item) =>
            item.family.toLowerCase().includes(fontSearch.toLowerCase())
          )
          .map((item) => (
            <Suspense key={item.family} fallback={<div>Loading.....</div>}>
              <Card
                fontSize={`${fontSize}px`}
                fontFamily={item.family}
                input={input}
                fontFile={item.files.regular as string}
              />
            </Suspense>
          ))}
      </Grid>
    </FBox>
  );
};

export default App;
