import {Ellipse} from '../ellipse/Ellipse'
import logo from '../../assets/img/partner.png'


export const Partners: React.FC = () => {

    const renderList:string[] = [logo,logo,logo,logo,logo,logo, logo,logo]

    return (
        <section className='partners'>
            <div className='partners__wrapper wrapper'>
            <div className='partners__title quick-start__title'>
                    <Ellipse additionalClass='item_1'/>
                    <h2>Партнеры - топовые бренды</h2>
            </div>
            <div className='partners__list'>
                {renderList.map((item, index) => (
                <div className={index>=4 ? `partners__item partners__item--border`:`partners__item` } key={index}>
                    <img src={item} alt={`brand + ${index}`}/>
                </div>
            ))}
            </div></div>
        </section>
    )
}