import {useState,useEffect} from 'react';
import { FullMessage } from "./messaging/fullmessage";
import { Recepient } from "./messaging/recepient";
import { sendMessage } from "../functions/send-message";
import io from 'socket.io-client';
import { messageTimeFormat } from '../functions/messageTimeFormat';
const socket=io.connect('http://localhost:5000');
    export function MessageArea(props){
        let messageElements="";
        if(props.messages){
            messageElements=props.messages.map(message=>{
                return <FullMessage
                            fullMessage={message.messageContent}
                            messageType={handleMessageSource(props.location,message)}
                            sender={message.isAdmin?'Admin':props.clientName}
                            messageTime={messageTimeFormat(message.messsageTime)}
                        />
            })
        }
        function handleMessageSource(currentLocation,messageObject){
            if(currentLocation==='admin'){
                return messageObject.isAdmin&&currentLocation==='admin'?'':'received'
            }
            return !messageObject.isAdmin&&currentLocation==='public'?'':'received';
        }
        return (
        <div id="messanger">
            <Recepient/>
            <div className="chat-text">
                {/* output the message from fullmessage.js */}
                {messageElements}
            </div>
            <div className="reply-box">
                <form action="#" onSubmit={sendMessage} id={props.chatId} >
                    <input type="text" name="message" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        )
    }
    
