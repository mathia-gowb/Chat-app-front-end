export function LandingPage(){
    return (
        <div className="landing-section">
        <div className="landing-heading">
            <div className="landing-text">
                <h1>CONTACT US</h1>
                <p>we will get back to you</p>
            </div>

        </div>

        <div id="messanger">
            <div className="active-charter">
                <div className="icon"><span>MN</span></div>
                <div className="header">
                    <h2>Mathobo Ngelekanyo</h2>
                    <p className="last-message-time">Last Seen 10/02/2022 18:00</p>
                </div>
            </div>
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
    </div>
    )
}

/* <div className="chat-text">
                <div className="chat-in chat-message-wrapper">
                    <p className="chat-caption">Mathobo Ngelekanyo</p>
                    <div className="chat-message">Lorem ipsum dolor. Ullam nemo odit cum o<span>MN</span>is perspiciatis enim hic velit culpa nihil?</div>
                    <p className="message-time">1hr Ago</p>
                </div>
                <div className="chat-out chat-message-wrapper">
                    <p className="chat-caption">You</p>
                    <div className="chat-message">Lorem ipsum dolor. Ullam nemo odit cum o<span>MN</span>is perspiciatis enim hic velit culpa nihil?</div>
                    <p className="message-time">1hr Ago</p>
                </div>
                <div className="chat-out chat-message-wrapper">
                    <p className="chat-caption">You</p>
                    <div className="chat-message">Lorem ipsum dolor. Ullam nemo odit cum o<span>MN</span>is perspiciatis enim hic velit culpa nihil?</div>
                    <p className="message-time">1hr Ago</p>
                </div>
                <div className="chat-in chat-message-wrapper">
                    <p className="chat-caption">Mathobo Ngelekanyo</p>
                    <div className="chat-message">Lorem ipsum dolor. Ullam nemo odit cum o<span>MN</span>is perspiciatis enim hic velit culpa nihil?</div>
                    <p className="message-time">1hr Ago</p>
                </div>
                
            </div>
            <div className="reply-box">
                <form action="#">
                    <input type="text" placeholder="type reply message ..............."/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>  */