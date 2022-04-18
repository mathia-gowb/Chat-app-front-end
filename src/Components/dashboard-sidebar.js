import { MessageSummary } from "./messaging/chat-summary";

export function SideBar(props){

    let chats=props.chats;
    const chatsElements=chats.map(chat=>{
        return <MessageSummary
                chatId={chat._id} 
                chatName={chat.clientName}
                messages={chat.messages}
                clickHandler={props.handleChatClick}
                />
    })

    return (
    <div id="sidebar">
        <h1 className="sidebar-header">Chats</h1>
        <ul className="chats-list" >
            {/* output the chart summary from chat-summary-js */}
           {chatsElements}
        </ul>
    </div>
    )
}

