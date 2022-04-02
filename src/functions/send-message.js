export function sendMessage(event){
   
    /* filter url */
    const regex=/\w*$/gm;
    const formOrigin=(event.target.baseURI).match(regex)[0];
        fetch('/api').then(response=>response.json()
        ).then(data=>console.log(data))
      
    event.preventDefault();
    console.log(formOrigin)
    
}