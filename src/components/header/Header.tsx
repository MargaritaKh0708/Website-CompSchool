
export const Header: React.FC = () => {
    return (
        <header className='header container'>
            <div className='header__wrapper'>
                <div className='header__logo'></div>
                <nav className='header__navigation'>
                <ul className='header__navigation-list'>
                    <li className='header__navigation-item'><a href="#main">Главная</a></li>
                    <li className='header__navigation-item'><a href="#couses">Курсы</a></li>
                    <li className='header__navigation-item'><a href="#schedule">Расписание</a></li>
                    <li className='header__navigation-item'><a href="#teachers">Преподаватели</a></li>
                    <li className='header__navigation-item'><a href="#mailing">Рассылка</a></li>
                    <li className='header__navigation-item'><a href="#contacts">Контакты</a></li>
                </ul>
                <button className='header__navigation-btn'>
                    Зайти в кабинет
                </button>
            </nav>
            </div>

        </header>
    )
}