
import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import PageLink from "./PageLink"
import IssuePage from "./IssuePage";

function App() {
  const [fetchData,setFetchData]=useState([1]);
  const [info,setInfo]=useState({});

  const dataFetching=()=>{
    fetch("https://api.github.com/repos/facebook/react/issues")
    .then(response=>response.json())
    .then((data)=>setFetchData(data))
  }

  useEffect(()=>{
    dataFetching();
  },[])

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <PageLink fetchData={fetchData} setInfo={setInfo}/>
            </Route>

            <Route path="/IssuePage" exact>
                <IssuePage info={info}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;