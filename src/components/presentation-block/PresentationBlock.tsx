
export const PresentationBlock: React.FC =() => {
     return (
        <section
         className='presentation-block container'>
            <div className='presentation-block__wrapper wrapper'>
                <h1 className='presentation-block__title'>Первый курс 
по компьютерной сборке</h1>
                <div className='presentation-block__timer'>
                    <div className='presentation-block__timer-item'> <span className='prentation-block__timer-title'>Дней</span></div>
                    <div className='presentation-block__timer-item'><span className='prentation-block__timer-title'>Часов</span></div>
                    <div className='presentation-block__timer-item'><span className='prentation-block__timer-title'>Минут</span></div>
                    <div className='presentation-block__timer-item'><span className='prentation-block__timer-title'>Секунд</span></div>
                </div>
            </div>
         </section>
     )
}