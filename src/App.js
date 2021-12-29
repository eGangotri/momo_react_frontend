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
   const [input, setInput] = useState('');
   const [selectInput, setSelectInput] = useState('');
   
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

   useEffect(()=>{
     if(input === ''){
      const x = retrieveAllImages().then( (resp) => {
        const respMap = resp.map((x)=>{
          return `<li>${x.urlsascsv}</li>`
        })
        setData(resp);
      });
     }
     else{
      setData(data.filter(_x => _x.urlsascsv.includes(input)));
     }
   },[input]);

   useEffect(()=>{
    if (selectInput === 'image'){

    }
    
    else if (selectInput === 'video'){

    }
    else{

    }
  },[selectInput]);


   const handleSelectChange = (e) => {
     console.log(`e ${e.target.value}`)
     setSelectInput(e.target.value);
   }

   const handleClick = (e) => {
    console.log(`e ${e.target.value}`)
  }

  const handleReset = (e) => {
    setInput("");
    setSelectInput("");
  }

  console.log(`input: ${input}`)

  return (
    <div className="App"> 
          <h1> Image Gallery</h1> 
          <div className="search-bar">
            <Search value={input} handleChange={(e)=> setInput(e.target.value)} />
            <Button handleClick={handleClick} name="Search"/>
            <Select handleChange={handleSelectChange} />
            <Button handleClick={handleReset} name="Reset"/>

          </div>
          <div className="data-container">
            <ImageGrid data={data} />
          </div>
    </div>
  );
}

export default App;
