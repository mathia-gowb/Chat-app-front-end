import { MessageTime } from "./message-time";

export function FullMessage(props){
    return (
        <div className={`${props.messageType==='received'?'chat-in':'chat-out'} chat-message-wrapper`}>
            <p className="chat-caption">{props.sender}</p>
            <div className="chat-message">{props.fullMessage}</div>
            <MessageTime messageTime={props.messageTime}/>
        </div>
    )
}





