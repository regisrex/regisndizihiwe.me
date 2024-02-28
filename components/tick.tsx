'use client'
import { useEffect, useState } from 'react';

const Tick = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 500); // Adjust blinking speed as needed (500ms here)

        return () => clearInterval(intervalId);
    }, []);

    return visible ? <span className="cursor font-black ">_</span> : null;
};

export default Tick;