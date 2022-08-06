import React from 'react';
import Header from "./components/Header/Header"
import { Searcher } from './components/Searcher/Searcher.js';
import  Routers   from "./Routes/Routers.js"


function App() {
  return (
    <div className="App">
      <Routers/>
      {/* //<Header/> */}
      <Searcher/>
    </div>
  );
}

export default App;
