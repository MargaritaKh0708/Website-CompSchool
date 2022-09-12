import icon1 from '../../assets/img/icons/icon-1.svg';
import icon2 from '../../assets/img/icons/icon-2.svg';
import icon3 from '../../assets/img/icons/icon-3.svg';



export const GetProff: React.FC = () => {
     return (
        <section className='get-proff'>
            <div className='get-proff__wrapper wrapper'>
                <h2 className='get-proff__title'>Получите профессию прямо сейчас</h2>
                <div className='get-proff__benefits'>
                    <div className='get-proff__benefits-item'>
                        <div className='get-proff__benefits-item-icon'>
                            <img src={icon1} alt='benefit'/></div>
                        <p className='get-proff__benefits-item-title'>Только практические
навыки в работе</p>
                        <span className='get-proff__benefits-item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                    </div>
                    <div className='get-proff__benefits-item'>
                        <div className='get-proff__benefits-item-icon'> <img src={icon2} alt='benefit-1'/></div>
                        <p className='get-proff__benefits-item-title'>Работа на самом
современном оборудовании</p>
                        <span className='get-proff__benefits-item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                    </div>
                    <div className='get-proff__benefits-item'>
                        <div className='get-proff__benefits-item-icon'><img src={icon3} alt='benefit-2'/></div>
                        <p className='get-proff__benefits-item-title'>Сертификация
по окончании обучения</p>
                        <span className='get-proff__benefits-item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                    </div>
                </div>
            </div>
        </section>
     )
}