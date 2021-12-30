import "./App.css";
import { retrieveAllImages } from "./services/retrieveService";
import { useEffect, useState } from "react";
import ImageGrid from "./components/grid/ImageGrid";
import Search from "./components/search/Search";
import Button from "./components/Button/Button";
import Select from "./components/select/Select";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  useEffect(() => {
    (async () => {
      const allImages = await retrieveAllImages();
      if (input === "" && selectInput === "") {
        setData(allImages);
      } else if (input !== "" && selectInput !== "") {
        setData(
          allImages.filter(
            (_x) => _x.scraped_site.includes(input) && _x._type === selectInput
          )
        );
      } else if (input !== "" && selectInput === "") {
        setData(allImages.filter((_x) => _x.scraped_site.includes(input)));
      } else if (input === "" && selectInput !== "") {
        setData(allImages.filter((_x) => _x._type === selectInput));
      }
    })();
  }, [input, selectInput]);

  const handleReset = (e) => {
    setInput("");
    setSelectInput("");
    document.getElementById('typeSelector').value='';
  };

  return (
    <div className="App">
      <h1> Image Gallery</h1>
      <div className="search-bar">
        <Search value={input} handleChange={(e) => setInput(e.target.value)} />
        <Select handleChange={(e) => setSelectInput(e.target.value)} />
        <Button handleClick={handleReset} name="Reset" />
      </div>
      <div className="data-container">
        <ImageGrid data={data} />
      </div>
    </div>
  );
}

export default App;
