import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let jsx=<p>I am learning React. My life is getting better.</p>
  return (
    <div id="main">
      <div id="root">
        {jsx}
      </div>
    </div>
  )
}


export default App;
