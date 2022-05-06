
export function messageTimeFormat(timeOfActivity){
    const currentDate=new Date().getTime();
    const originalDate=new Date(timeOfActivity).getTime();
    const secondsPerDay=86400000;
    const secondsPerHour=3600000;
    const secondsPerMinute=60000;
    const timeDifference=currentDate-originalDate
    console.log('%c Log time', 'background: #222; color: #bada55',
    timeOfActivity);
    if(timeDifference>=secondsPerDay){
        const days=Math.floor(timeDifference/secondsPerDay)
        return `${days} day${days>1?'s':''} ago`
    }
    if(timeDifference>=secondsPerHour){
        const hours=Math.floor(timeDifference/secondsPerHour)
        return `${hours} hour${hours>1?'s':''} ago`
    }
    if(timeDifference>=secondsPerMinute){
        const minutes=Math.floor(timeDifference/secondsPerMinute)
        return `${minutes} minute${minutes>1?'s':''} ago`
    }
    return 'few seconds ago'

}
