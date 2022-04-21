import {useState,useEffect} from 'react';
import { FullMessage } from "./messaging/fullmessage";
import { Recepient } from "./messaging/recepient";
import { sendMessage } from "../functions/send-message";
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

    export function MessageArea(props){
        let messageElements="";
        if(props.messages){
            messageElements=props.messages.map(item=>{
                return <FullMessage
                            fullMessage={item.messageContent}
                            messageType={handleMessageSource(props.location,item)}
                            sender={"Ngekenayo"}
                            messageTime={"01-april-2022 @ 18:00"}
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
    
