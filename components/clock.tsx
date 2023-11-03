import { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])
    return <span>{time.getHours().toLocaleString()} ::  {time.getMinutes().toLocaleString()} :: {time.getSeconds().toLocaleString()} </span>
}

export default Clock