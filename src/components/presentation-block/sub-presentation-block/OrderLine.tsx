export const OrderLine: React.FC = () => {
    return (
    <div className='order-line'
    >
        <div className='order-line__wrapper wrapper'>
            <button type='button' name='order' className='order-line__btn'>Заказать курс</button>
            <div className='order-line__statistic'>
                <p className='order-line__statistic-item'>Успешно закончили курс: <span>300</span></p>
                <p className='order-line__statistic-item'>Успешно закончили курс: <span>290</span></p>
            </div>
            <div className='order-line__percent'>
            <p className='order-line__statistic-item'>Заработано учениками: <span>400 000₽</span></p>
            <span className='order-line__percent-line'></span>
            <div className='order-line__percent-num'> <span>0</span> <span>1 000 000₽</span></div>
            </div>
        </div>

    </div>
    )
}