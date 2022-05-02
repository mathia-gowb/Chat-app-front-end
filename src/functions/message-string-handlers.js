
export function getLastMessage(messagesArray){
    const messagesLength=messagesArray.length;
    const lastMessage=messagesArray[messagesLength-1]
    return lastMessage['messageContent']
}
export function trimMessage(string){
    if(string.length>40){
        //returns summary of message if message length is greater than 40 characters
        const shortString=string.slice(0,37)
        return `${shortString}....`
    }
    return string
}