import { useEffect, useState } from "react"

function time(){
    const [time, setTime] = useState(() => new Date())

    useEffect(() => {
        const id = setInterval(() => {
           setTime(new Date()); 
        }, 1000);
        return () => clearInterval(id)
    },[])
    return time
}

export default function Clock(){
    const currentTime = time()
    return(
        <>
            <h1>{currentTime}</h1>
            <input/>
        </>
    )
}