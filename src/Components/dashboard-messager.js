import { FullMessage } from "./messaging/fullmessage";

    export function MessageArea(){
        return (
        <div id="messanger">
            <div className="active-charter">
                <div className="icon"><span>MN</span></div>
                <div className="header">
                    <h2>Mathobo Ngelekanyo</h2>
                    <p className="last-message-time">Last Seen 10/02/2022 18:00</p>
                </div>
            </div>
            <div className="chat-text">
                {/* output the message from fullmessage.js */}
                <FullMessage></FullMessage>
                
            </div>
            <div className="reply-box">
                <form action="#">
                    <input type="text" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        )
    }
    
