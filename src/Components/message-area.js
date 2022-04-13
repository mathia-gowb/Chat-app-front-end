import {useState,useEffect} from 'react';
import { FullMessage } from "./messaging/fullmessage";
import { Recepient } from "./messaging/recepient";
import { sendMessage } from "../functions/send-message";
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

    export function MessageArea(props){
        console.log(props)
        const messageElements=props.messages.map(item=>{
            return <FullMessage
                        messageType={"received"}
                        fullMessage={"Mathobo ngelekayo wa itsani"}
                        sender={"Ngekenayo"}
                        messageTime={"01-april-2022 @ 18:00"}
                    />
        })

        return (
        <div id="messanger">
            <Recepient/>
            <div className="chat-text">
                {/* output the message from fullmessage.js */}
                {messageElements}
            </div>
            <div className="reply-box">
                <form action="#" onSubmit={sendMessage} id={props.chatId}>
                    <input type="text" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        )
    }
    
