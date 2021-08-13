import React from 'react';
import HelloWorld from "./Components/HelloWorld/HelloWorld.jsx"
import './App.css';

function App() {

    function getRandom(array){
       return Math.floor(Math.random() * array.length);

    }

    return (
      <div className="body">
        <HelloWorld getRandom={getRandom}/>
      </div>
    );
  }


export default App;
