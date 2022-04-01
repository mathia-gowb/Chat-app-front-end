import { UserIcon } from "../user-icon";
import { MessageTime } from "./message-time";

export function MessageSummary(props){
    return (
        <li class="chat">
            <UserIcon/>
            <div class="chat-info">
                <div class="chat-header">
                    <h3>Mathobo Ngelekanyo</h3>
                    <MessageTime/>
                </div>
                <div class="message">
                    <p class="chat-message">This will be the preview message</p>
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