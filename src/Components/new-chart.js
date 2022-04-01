import { Recepient } from "./messaging/recepient";

export function NewChart(){
    return (
        <div id="messanger">
            <Recepient></Recepient>
            <div id="new-chart">
            <form action="" name="new-chart">
                <label for="name">Your name</label>
                <br/>
                <br/>
                <input type="text" name="name" id="name" placeholder="enter your name ..... "/>
                <br/>
                <br/>
                <br/>
                <label for="message">Your Message</label>
                <br/>
                <br/>
                <textarea name="message" id="" cols="30" rows="10">enter your message</textarea>
                 <br/>
                 <br/>
                <button>Send Message <s></s><i className="fa-solid fa-paper-plane"></i></button>
            </form>
            </div>
        </div>
    )
}