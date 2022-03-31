import { MessageSummary } from "./messaging/chat-summary";

export function SideBar(){
    return (
    <div id="sidebar">
        <h1 className="sidebar-header">Chats</h1>
        <ul className="chats-list">
            {/* output the chart summary from chat-summary-js */}
            <MessageSummary></MessageSummary>
        </ul>
    </div>
    )
}

