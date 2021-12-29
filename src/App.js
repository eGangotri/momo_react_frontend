import logo from './logo.svg';
import './App.css';
import { retrieveAllImages } from './services/retrieveService';
import { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';

 function App() {
   const [data, setData] = useState([]);
   useEffect(()=>{
    const x = retrieveAllImages().then( (resp) =>{
      const respMap = resp.map((x)=>{
        return `<li>${x.urlsascsv}</li>`
      })
      setData(resp);
      console.log(`resp ${JSON.stringify(resp,null,2)}`)
      console.log(`respMap ${respMap}`)
    });
   },[]);


  return (
    <div className="App"> 
          <h1> Image Gallery</h1> 
          <ImageGrid data={data} />
    </div>
  );
}

export default App;
