import logo from './logo.svg';
import './App.css';
import { retrieveAllImages } from './services/retrieveService';
import { useEffect, useState } from 'react';
import ImageGrid from './components/grid/ImageGrid';
import Search from './components/search/Search';
import Button from './components/Button/Button';
import Select from './components/select/Select';

 function App() {
   const [data, setData] = useState([]);
   useEffect(()=>{
    const x = retrieveAllImages().then( (resp) => {
      const respMap = resp.map((x)=>{
        return `<li>${x.urlsascsv}</li>`
      })
      setData(resp);
      console.log(`resp ${JSON.stringify(resp,null,2)}`)
      console.log(`respMap ${respMap}`)
    });
   },[]);

   const handleChange = (e) => {
     console.log(`e ${e}`)
   }

   const handleClick = (e) => {
    console.log(`e ${e}`)
  }


  return (
    <div className="App"> 
          <h1> Image Gallery</h1> 
          <div className="search-bar">
            <Search handleChange={handleChange} />
            <Button handleClick={handleClick} name="Search"/>
            <Select handleChange={handleChange} />

          </div>
          <div className="data-container">
            <ImageGrid data={data} />
          </div>
    </div>
  );
}

export default App;
