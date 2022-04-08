import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

function handleResponseData(data){
    console.log(data.redirect)
    if(data.redirect){
        window.location.href=data.redirect;
    }else{
        return //fetched results
    }
}
export function sendMessage(event){
    event.preventDefault();
    /* filter url */
    const regex=/\w*$/gm;
    const eventTarget=event.target;
    const formOrigin=(eventTarget.baseURI).match(regex)[0];

    switch(formOrigin) {
        case 'admin':
            socket.emit('NEW_ADMIN_MESSAGE',{message:'This is a new Message',name:'UserName',targetChatId:'targetUserId'})
            break;
        case 'message':
            socket.emit('NEW_MESSAGE',{message:'This is a new Message',name:'UserName',chatId:'userId'})
          break;
        default:
            socket.emit('NEW_CHAT',{message:'This is a new Message',name:'UserName'})
      }
}
