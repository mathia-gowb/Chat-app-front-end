import { trimMessage,getLastMessage } from "../../functions/message-string-handlers";
import { UserIcon } from "../user-icon";
import { MessageTime } from "./message-time";
import { Link } from "react-router-dom";

export function MessageSummary(props){
    const lastMessage=getLastMessage(props.messages);
    return (
        <li className="chat" data-chatid={props.chatId} onClick={props.clickHandler}>
            <UserIcon userName={props.chatName}/>
            <div className="chat-info">
                <div className="chat-header">
                    <h3>{props.chatName}</h3>
                    <MessageTime/>
                </div>
                <div className="message">
                    <p className="chat-message">{trimMessage(lastMessage)}</p>
                        {/* togle between showing unread and read messages */}
                        {props.showUnreadMessages?<div class="unread-messages"><span>10</span></div>:""}
                </div>
            </div>
        </li>

    )
}

/* <li class="chat active-chat">
<div class="icon"><span>MN</span></div>
<div class="chat-info">
    <div class="chat-header"><h3>Mathobo Ngelekanyo</h3><span class="message-time">1hr Ago</span></div>
    <div class="message">
        <p class="chat-message">This will be the preview message</p>
    </div>
</div>
</li> */