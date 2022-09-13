
import { useState, useEffect } from 'react';


export const Timer: React.FC = () => {


    const [timeDistance, setTimeDistance] = useState<number>(new Date("Jan 14, 1970 15:37:25").getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeDistance((c: number) => c >= 1000 ? c - 1000 : 0); //форму функционального обновления хука setState, которая позволяет указать, как должно меняться состояние, не ссылаясь явно на текущее состояние
            console.log('this', timeDistance)
        }, 1000)

        return () => clearInterval(timer)
    }, [])


    let seconds = Math.floor((timeDistance / 1000) % 60);
    let minutes = Math.floor((timeDistance / 1000 / 60) % 60);
    let hours = Math.floor((timeDistance / 1000 / 60 / 60) % 24);
    let days = Math.floor(timeDistance / 1000 / 60 / 60 / 24);

    return (
        <div className='presentation-block__timer'>
            <div className='presentation-block__timer-item'><span className='presentation-block__timer-date'>{days >= 10 ? days : `0${days}`}</span> <span className='presentation-block__timer-title'>Дней</span></div>
            <div className='presentation-block__timer-item'><span className='presentation-block__timer-date'>{hours >= 10 ? hours : `0${hours}`}</span><span className='presentation-block__timer-title'>Часов</span></div>
            <div className='presentation-block__timer-item'><span className='presentation-block__timer-date'>{minutes >= 10 ? minutes : `0${minutes}`}</span><span className='presentation-block__timer-title'>Минут</span></div>
            <div className='presentation-block__timer-item'><span className='presentation-block__timer-date'>{seconds >= 10 ? seconds : `0${seconds}`}</span><span className='presentation-block__timer-title'>Секунд</span></div>
        </div>)
}