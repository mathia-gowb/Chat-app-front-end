import { FullMessage } from "./messaging/fullmessage";
import { Recepient } from "./messaging/recepient";
import { sendMessage } from "../functions/send-message";

    export function MessageArea(props){
        const messages=props.messages;
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
                <form action="#" onSubmit={sendMessage}>
                    <input type="text" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        )
    }
    
