import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');


export function sendMessage(event){
    event.preventDefault();
    /* filter url */
    const regex=/\w*$/gm;
    const eventTarget=event.target;
    const formOrigin=(eventTarget.baseURI).match(regex)[0];
    const targetId=eventTarget.id;
    //if element has id of no-chat then there is no previous chat
    if(targetId==='no-chat'){
        socket.emit('NEW_CHAT',{message:'This is a new Message',name:'UserName'});
        return;
    }
    if(formOrigin==='admin'){
        socket.emit('NEW_ADMIN_MESSAGE',{message:'This is a new Message',name:'UserName',targetChatId:targetId})
        return
    }
    if(formOrigin==='public'){
        console.log('sending message from public')
        socket.emit('NEW_MESSAGE',{message:'This is a new Message',name:'UserName',chatId:targetId});
        return
    }

}
