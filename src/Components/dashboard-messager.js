import { FullMessage } from "./messaging/fullmessage";
import { Recepient } from "./messaging/recepient";
import { sendMessage } from "../functions/send-message";
import io from "socket.io-client";;
;
const socket=io.connect('http://localhost:5000');
    export function MessageArea(props){
        const messages=props.messages;
        socket.on('NEW_MESSAGE',(data)=>{
            console.log(data)
            /* WHEN A NEW MESSAGE IS ADDED TO THE DATABASE EMIT A GET_MESSAGES TO GET ALL THE MESSAGES FOR THIS CHAT */
            socket.emit('GET_MESSAGES',{chatId:props.chatId}
            )
        })
        socket.on('RETURNED_MESSAGES',(data)=>{
            //change some state
        })
        return (
        <div id="messanger">
            <Recepient/>
            <div className="chat-text">
                {/* output the message from fullmessage.js */}
                <FullMessage
                    messageType={"received"}
                    fullMessage={"Mathobo ngelekayo wa itsani"}
                    sender={"Ngekenayo"}
                    messageTime={"01-april-2022 @ 18:00"}
                />
                
            </div>
            <div className="reply-box">
                <form action="#" onSubmit={sendMessage} name={props.chatId}>
                    <input type="text" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        )
    }
    
