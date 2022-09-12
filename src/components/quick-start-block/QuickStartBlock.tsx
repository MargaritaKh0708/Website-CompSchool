import { Ellipse } from "components/ellipse/Ellipse"

export const QuickStartBlock: React.FC = () => {
    return (
        <section className='quick-start'>
            <div className='quick-start__wrapper wrapper'>
                <div className='quick-start__title'>
                    <Ellipse additionalClass='item_0'/>
                    <h2 >Быстрый старт</h2></div>
                <p className='quick-start__sub-title'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                <div className='quick-start__statistic'>
                    <div className='quick-start__statistic-item'>
                        <span className='quick-start__statistic-item-percent'>100%</span>
                        <div className='quick-start__statistic-item-block'/>
                        <span className='quick-start__statistic-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste eveniet aut commodi voluptatibus voluptates sed veritatis quasi libero reprehenderit itaque dolore illo, minus suscipit inventore eligendi perspiciatis. Expedita, sit.</span>
                    </div>
                    <div className='quick-start__statistic-item'>
                        <span className='quick-start__statistic-item-percent'>75%</span>
                        <div className='quick-start__statistic-item-block height-75'/>
                        <span className='quick-start__statistic-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste eveniet aut commodi voluptatibus voluptates sed veritatis quasi libero reprehenderit itaque dolore illo, minus suscipit inventore eligendi perspiciatis. Expedita, sit.</span>
                    </div>
                    <div className='quick-start__statistic-item'>
                        <span className='quick-start__statistic-item-percent'>50%</span>
                        <div className='quick-start__statistic-item-block height-50'/>
                        <span className='quick-start__statistic-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste eveniet aut commodi voluptatibus voluptates sed veritatis quasi libero reprehenderit itaque dolore illo, minus suscipit inventore eligendi perspiciatis. Expedita, sit.</span>
                    </div>
                    <div className='quick-start__statistic-item'>
                        <span className='quick-start__statistic-item-percent '>Итог</span>
                        <div className='quick-start__statistic-item-block height-25'/>
                        <span className='quick-start__statistic-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste eveniet aut commodi voluptatibus voluptates sed veritatis quasi libero reprehenderit itaque dolore illo, minus suscipit inventore eligendi perspiciatis. Expedita, sit.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}