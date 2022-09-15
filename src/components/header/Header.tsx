import logo from 'assets/img/logo.svg'

export const Header: React.FC = () => {
    return (
        <header className='header container'>
            <div className='header__wrapper'>
                <div className='header__logo'><img src={logo} alt="logo" /></div>
                <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><a className='navigation__link' href="#main">Главная</a></li>
                    <li className='navigation__item'><a className='navigation__link' href="#couses">Курсы</a></li>
                    <li className='navigation__item'><a className='navigation__link' href="#schedule">Расписание</a></li>
                    <li className='navigation__item'><a className='navigation__link' href="#teachers">Преподаватели</a></li>
                    <li className='navigation__item'><a className='navigation__link' href="#mailing">Рассылка</a></li>
                    <li className='navigation__item'><a className='navigation__link' href="#contacts">Контакты</a></li>
                </ul>
                <button className='navigation__btn'>
                    Зайти в кабинет
                </button>
            </nav>
            </div>
        </header>
    )
}