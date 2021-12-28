import logo from './logo.svg';
import './App.css';
import { retrieveAllImages } from './services/retrieveService';
import { useEffect, useState } from 'react';

 function App() {
   const [data, setData] = useState([]);
   useEffect(()=>{
    const x = retrieveAllImages().then( (resp) =>{
      setData(JSON.stringify(resp));
      console.log(`resp ${JSON.stringify(resp,null,2)}`)
    });
   },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ({data})
        </a>
      </header>
    </div>
  );
}

export default App;
