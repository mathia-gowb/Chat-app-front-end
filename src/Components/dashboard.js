import { MessageArea } from "./message-area";
import { SideBar } from "./dashboard-sidebar";
import {useState,useEffect} from 'react';

export function Dashboard(){
    const [apiData,setApiData]=useState(null);
    useEffect(()=>{
      fetch('/api').then(response=>response.json()
      ).then(data=>setApiData(data))
    },[])
  
    if(!apiData){
      return (<p>Loading.......</p>);
    }
    
    return (
        <div id="app">
        {/* output the sidebar from dashboard-sidebar */}
        <SideBar></SideBar>
        {/* output the messanger component from dashboard-messanger*/}
        <MessageArea catId={0} isDashboard={true}/>
      </div>
    )
}