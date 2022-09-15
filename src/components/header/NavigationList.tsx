export const NavigationList: React. FC = () => {
     return (
        <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#main">
                Главная
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#couses">
                Курсы
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#schedule">
                Расписание
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#teachers">
                Преподаватели
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#mailing">
                Рассылка
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#contacts">
                Контакты
              </a>
            </li>
          </ul>
     )
}