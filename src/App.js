import React from "react";
import data from "./components/data";
import Header from "./components/Header";
import Main from "./components/Main";
import { withRouter } from 'react-router'


function App(props) {
  return (
    <div>
     <Header/>
     <Main data={data}/>
    </div>
  );
}

export default App;
