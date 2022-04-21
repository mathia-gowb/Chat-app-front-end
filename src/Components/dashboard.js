import { MessageArea } from "./message-area";
import { SideBar } from "./dashboard-sidebar";
import {useState,useEffect} from 'react';
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function Dashboard(){
    const [chats,setApiData]=useState(null);
    const [newMessage,setNewMessage]=useState(null);
    //when new chat initiated reload all messages
    socket.on('DETECT_NEW_MESSAGE',(data)=>setNewMessage(data.messages))
    //when new message received from front end reload all messages
    socket.on('RETURNED_MESSAGES',(data)=>{setNewMessage(data)});
    socket.on('MESSAGES_FOR_CURRENT_CHAT',(data)=>{
        setNewMessage(data)
    })
    useEffect(()=>{
      //loading all chats onfirst load
      fetch('/chats').then(response=>response.json()
      ).then(data=>setApiData(data))
    },[newMessage])
    
    const [activeChatId,setActiveChatId]=useState();
    if(!chats){ return (<p>Loading.......</p>)} 

    function handleChatClick(event){
      const clickedChatId=event.currentTarget.dataset.chatid;
      setActiveChatId(clickedChatId);
      socket.emit('GET_MESSAGES',{chatId:clickedChatId,role:'getClickedChatMessages'})
    }

    //detecting when new chat is initiated
    const messageAreaWithContent=<MessageArea location={"admin"} messages={newMessage} chatId={activeChatId} isDashboard={true}/>
    const emptyChat=<div className="empty-messages"><button>There are no messages at the moment</button> </div>
    return (
        <div id="app">
        {/* output the sidebar from dashboard-sidebar */}
        <SideBar chats={chats} handleChatClick={handleChatClick}/>
        {/* output the messanger component from dashboard-messanger*/}
        {activeChatId?messageAreaWithContent:emptyChat}
      </div>
    )
}