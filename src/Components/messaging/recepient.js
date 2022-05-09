import { messageTimeFormat } from "../../functions/messageTimeFormat";
import { UserIcon } from "../user-icon";

export function Recepient(props){
    return (
    <div className="active-charter">
        <UserIcon userName={props.clientName}/>
        <div className="header">
            <h2>{props.clientName}</h2>
            <p className="last-message-time">{messageTimeFormat(props.chatTime)}</p>
        </div>
    </div>
    )
}