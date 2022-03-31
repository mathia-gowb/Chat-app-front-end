import './App.css';
import './front-end.css';
import { Dashboard } from './Components/dashboard';
import {useState,useEffect} from 'react';
import { LandingPage } from './Components/frontpage';

function App() {
  const [route,setRoute]=useState(null);

  if(route){
    return route==="Dashboard"?<Dashboard/>:<LandingPage/>
  }
  return (
      <div id="app">
        <div className="action-screen">
            <div className="action-screen-items">
                <h1>Who are you?</h1>
                <br/>
                <br/>
                <div className="action-buttons-wrapper">
                    <button onClick={()=>setRoute('FrontEnd')}>Website Visitor</button>
                    <button onClick={()=>setRoute('Dashboard')}>Website Admin</button>
                </div>
            </div>

        </div>
    </div>
     /* <Dashboard/> */
  )
}

export default App;
