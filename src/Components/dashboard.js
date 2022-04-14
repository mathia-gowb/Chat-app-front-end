import { MessageArea } from "./message-area";
import { SideBar } from "./dashboard-sidebar";
import {useState,useEffect} from 'react';
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function Dashboard(){
    const [chats,setApiData]=useState(null);
    const [newMessage,setNewMessage]=useState(null);
    //when new chat initiated reload all messages
    socket.on('DETECT_NEW_MESSAGE',(data)=>{
      setNewMessage(data)
    })
    //when new message received from front end reload all messages
    socket.on('RETURNED_MESSAGES',(data)=>{
      setNewMessage(data)
    })
    useEffect(()=>{
      //loading all chats onfirst load
      fetch('/chats').then(response=>response.json()
      ).then(data=>setApiData(data))
    },[newMessage])
  
    if(!chats){
      return (<p>Loading.......</p>);
    }
    //detecting when new chat is initiated
    return (
        <div id="app">
        {/* output the sidebar from dashboard-sidebar */}
        <SideBar chats={chats}/>
        {/* output the messanger component from dashboard-messanger*/}
        {/* <MessageArea catId={0} isDashboard={true}/> */}
      </div>
    )
}