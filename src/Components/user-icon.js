export function UserIcon(props){
    function convertTextToIcon(userName){
        console.log(userName);
        if(userName===undefined)return;//if no username dont run the function
        userName=userName.toUpperCase();
        const cleanUserName=userName.trim();
        const checkSpaceRegex=/\s/gm;
        //check first letter of everyword
        const checkFirstLettersRegex=/^\w|(?<=\s)\w/gm;
        if(checkSpaceRegex.test(userName)){
            console.log(userName)
            const [letter1,letter2]=userName.match(checkFirstLettersRegex);
            return `${letter1}${letter2}`
        }
        return userName[0]
    }
    
    return (
        <div className="icon"><span>{convertTextToIcon(props.userName)}</span></div>
    )
}