export function createChatId(){
    const date=new Date();
    const randomNumber=Math.floor(Math.random()*1000)
    const id=`ID-${date.getTime()}-${randomNumber}`
    return id
}