import './App.css';
import Navbar from './component/Navbar'
import News from "./component/News"
// import { Router, Routes } from 'react-router-dom';
// import {
//   Route
// } from "react-router-dom";

function App() {
  return (
      
      <>
      
      <Navbar/>
      <News pageSize={8}/>
          {/* <Route exact path="/"><News key="general" pageSize={5}/></Route>
          <Route exact path="/general"><News key="general" pageSize={5}/></Route>
          <Route exact path="/business"><News  key="business"pageSize={5} /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={5}/></Route>
          <Route exact path="/health"><News key="health" pageSize={5}/></Route>
          <Route exact path="/sscience"><News key="science" pageSize={5}/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={5}/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={5}/></Route> */}
        
    </>
  )
}

export default App;

