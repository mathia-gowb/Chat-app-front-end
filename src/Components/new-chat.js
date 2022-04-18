import { sendMessage } from "../functions/send-message";
import { Recepient } from "./messaging/recepient";

export function NewChart(){

    return (
        <div id="messanger">
            <Recepient></Recepient>
            <div id="new-chart">
            <form action="" id="no-chat" name="new-chat" onSubmit={sendMessage}>
                <label htmlFor="name">Your name</label>
                <br/>
                <br/>
                <input type="text" name="name" id="name" placeholder="enter your name ..... "/>
                <br/>
                <br/>
                <br/>
                <label htmlFor="message">Your Message</label>
                <br/>
                <br/>
                <textarea name="message" id="message" cols="30" rows="10" defaultValue={"enter your message"}></textarea>
                 <br/>
                 <br/>
                <button>Send Message <s></s><i className="fa-solid fa-paper-plane"></i></button>
            </form>
            </div>
        </div>
    )
}