import { MessageArea } from "./dashboard-messager";
import { NewChart } from "./new-chart";
import { Recepient } from "./messaging/recepient";

export function LandingPage(props){
    return (
        <div className="landing-section">
        <div className="landing-heading">
            <div className="landing-text">
                <h1>CONTACT US</h1>
                <p>we will get back to you</p>
            </div>

        </div>
        {/* if user already exist on the database show chat with previous chats, if the user does not exist out put the name and message form */}
        {props.userExists?<MessageArea messages={""}/>:<NewChart/>}

    </div>
    )
}

/*  */