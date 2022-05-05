import { trimMessage,getLastMessage } from "../../functions/message-string-handlers";
import { UserIcon } from "../user-icon";
import { MessageTime } from "./message-time";
import { Link } from "react-router-dom";
import { unReadMessages } from "../../functions/show-unread-messages";
import { useEffect } from "react";
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function MessageSummary(props){
    const lastMessage=getLastMessage(props.messages);
    const unReadMessagesCount=unReadMessages(props.messages);
    useEffect(()=>{
        if(props.active){
            socket.emit('CHANGE_MESSAGE_STATUS',{chatId:props.chatId})
        }
    })
    //if active send the change message status
    return (
        <li className={`chat ${props.active?"active-chat":""}` } data-chatid={props.chatId} onClick={props.clickHandler}>
            <UserIcon userName={props.chatName}/>
            <div className="chat-info">
                <div className="chat-header">
                    <h3>{props.chatName}</h3>
                    <MessageTime/>
                </div>
                <div className="message">
                    <p className="chat-message">{trimMessage(lastMessage)}</p>
                        {/* togle between showing unread and read messages */}
                        {!props.active&&unReadMessagesCount>0&&<div class="unread-messages"><span>{unReadMessagesCount}</span></div>}
                </div>
            </div>
        </li>
    )
}

