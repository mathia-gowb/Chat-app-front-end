import {useState,useEffect} from 'react'
import { MessageArea } from "./message-area";
import { NewChart } from "./new-chat";
import { Recepient } from "./messaging/recepient";
import io from 'socket.io-client';
import { createChatId } from '../functions/create-chatid';
const socket=io.connect('http://localhost:5000');

export function LandingPage(props){
    let showPrevMessages=false;
    const chatId=createChatId();
    const [currentChatId,setChatId]=useState(null);
    useEffect(()=>setChatId(chatId),[])
    //initiate private chat once
    socket.on('INITIATE_PRIVATE_CHAT',(data)=>{
            showPrevMessages=true
            socket.removeListener('INITIATE_PRIVATE_CHAT',()=>console.log('initiated new chat'));
        })
    const [messages,setMessages]=useState([]);
        socket.on('DETECT_NEW_CHAT',(data)=>{
            /* WHEN A NEW MESSAGE IS ADDED TO THE DATABASE EMIT A GET_MESSAGES TO GET ALL THE MESSAGES FOR THIS CHAT */
            socket.emit('GET_MESSAGES',{chatId:currentChatId,role:'getFirstChatMessages'})
            socket.removeListener('DETECT_NEW_CHAT',()=>console.log('new chat detected'));
        });
        socket.on('RETURNED_MESSAGES',(data)=>{
            //change some state
            setMessages(data);
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
            {showPrevMessages?<MessageArea location={"public"} chatId={currentChatId} messages={messages}/>:<NewChart sessionId={chatId}/>}
        </div>
    )
}