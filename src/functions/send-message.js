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
    const endPoints={
       admin:'/admin',
       public:'/public',
       messages:'/public'//if coming from public it will take the same endpoint as an existing user
    }
    const eventTarget=event.target
    const messageValues={
        messagerName:eventTarget.elements['name'].value,
        message:eventTarget.elements['message'].value
    }

    /* filter url */
    const regex=/\w*$/gm;
    const formOrigin=(eventTarget.baseURI).match(regex)[0];
    fetch(`${endPoints[formOrigin]}?name=${messageValues.messagerName}&message=${messageValues.message}`,
    {method:'POST'})
    .then(response=>response.json())
    .then(data=>handleResponseData(data)) 
    
}

