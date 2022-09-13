import { Timer } from "./timer/Timer"


export const PresentationBlock: React.FC = () => {
     return (
        <section
         className='presentation-block container'>
            <div className='presentation-block__wrapper wrapper'>
                <h1 className='presentation-block__title'>Первый курс 
по компьютерной сборке</h1>
                <Timer/>
            </div>
         </section>
     )
}