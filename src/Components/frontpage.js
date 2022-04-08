import {useState} from 'react'
import { MessageArea } from "./dashboard-messager";
import { NewChart } from "./new-chat";
import { Recepient } from "./messaging/recepient";
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function LandingPage(props){
    const [currentChatId,setChatId]=useState(null);
    socket.on('INITIATE_PRIVATE_CHART',(data)=>{
        setChatId(data.chatId)
    })
    return (
        <div className="landing-section">
        <div className="landing-heading">
            <div className="landing-text">
                <h1>CONTACT US</h1>
                <p>we will get back to you</p>
            </div>

        </div>
        {/* if user already exist on the database show chat with previous chats, if the user does not exist out put the name and message form */}
        
        {currentChatId?<MessageArea chatId={currentChatId} messages={""}/>:<NewChart/>}

    </div>
    )
}

/*  */