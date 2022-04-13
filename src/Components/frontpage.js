import {useState} from 'react'
import { MessageArea } from "./message-area";
import { NewChart } from "./new-chat";
import { Recepient } from "./messaging/recepient";
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function LandingPage(props){
    const [currentChatId,setChatId]=useState(null);
    //initiate private chat once
    socket.on('INITIATE_PRIVATE_CHART',(data)=>{
            setChatId(data.chatId);
        })

    const [messages,setMessages]=useState([]);
        socket.on('DETECT_NEW_MESSAGE',(data)=>{
            /* WHEN A NEW MESSAGE IS ADDED TO THE DATABASE EMIT A GET_MESSAGES TO GET ALL THE MESSAGES FOR THIS CHAT */
            socket.emit('GET_MESSAGES',{chatId:currentChatId}
            )
        });
        socket.on('RETURNED_MESSAGES',(data)=>{
            //change some state
            console.log(data);
            setMessages(data)
        });

    return (
        <div className="landing-section">
        <div className="landing-heading">
            <div className="landing-text">
                <h1>CONTACT US</h1>
                <p>we will get back to you</p>
            </div>

        </div>
        {/* if user already exist on the database show chat with previous chats, if the user does not exist out put the name and message form */}
        
        {currentChatId?<MessageArea chatId={currentChatId} messages={messages}/>:<NewChart/>}

    </div>
    )
}

/*  */