import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

export function sendMessage(event){
    event.preventDefault();
    /* filter url */
    const regex=/\w*$/gm;
    const eventTarget=event.target;
    const formOrigin=(eventTarget.baseURI).match(regex)[0];
    const targetId=eventTarget.id;

    const messageText=eventTarget.elements['message'].value;
    //if element has id of no-chat then there is no previous chat
    if(targetId==='no-chat'){
        const userName=eventTarget.elements['name'].value;
        socket.emit('NEW_CHAT',{message:messageText,name:userName,admin:false});
        return;
    }
    if(formOrigin==='admin'){
        console.log(targetId);
        socket.emit('NEW_ADMIN_MESSAGE',{message:messageText,name:'ADMIN',chatId:targetId,admin:true})
        return
    }
    if(formOrigin==='public'){
        console.log('sending message from public')
        socket.emit('NEW_MESSAGE',{message:messageText,chatId:targetId,admin:false});
        return
    }
}
