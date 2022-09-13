
import { useState, useEffect } from 'react';

export const Timer: React.FC = () => {



    const [timeDistance, setTimeDistance] = useState<number>(new Date("Jan 14, 1970 15:37:25").getTime());


    useEffect(() => {
        const timer = setInterval(() => {
         setTimeDistance(() => timeDistance >= 1 ? timeDistance - 1 : 0);
            console.log('this', timeDistance)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeDistance])

 
    let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

    return (
        <div className='presentation-block__timer'>
            <div className='presentation-block__timer-item'>{days} <span className='prentation-block__timer-title'>Дней</span></div>
            <div className='presentation-block__timer-item'>{hours}<span className='prentation-block__timer-title'>Часов</span></div>
            <div className='presentation-block__timer-item'>{minutes}<span className='prentation-block__timer-title'>Минут</span></div>
            <div className='presentation-block__timer-item'>{seconds}<span className='prentation-block__timer-title'>Секунд</span></div>
        </div>)
}