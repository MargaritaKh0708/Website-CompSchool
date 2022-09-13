import facebook from 'assets/img/icons/facebook.png';
import youtube from 'assets/img/icons/youtube.png';
import insta from 'assets/img/icons/insta.png';
import vk from 'assets/img/icons/vk.png';


export const Footer: React. FC = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <h3 className='footer__title'>Статьи каждую неделю</h3>
                <p className='footer__sub-title'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                <form className='footer__form'>
                    <label className='footer__form-label'>
                    <input type='email' placeholder='E-mail'/>
                    <button className='footer__form-btn'type='submit'>Подписаться</button>
                    </label>
                </form>
                <div className='footer__social'> 
                <button type='button'><a href="https://www.youtube.com/?gl=UA&hl=ru"><img src={youtube} alt="youtube" /></a></button>
                <button type='button'><a href="https://www.youtube.com/?gl=UA&hl=ru"><img src={vk} alt="vk" /></a></button>
                <button type='button'><a href="https://www.youtube.com/?gl=UA&hl=ru"><img src={facebook} alt="facebook" /></a></button>
                <button type='button'><a href="https://www.youtube.com/?gl=UA&hl=ru"><img src={insta} alt="instagram" /></a></button>
                </div>
            </div>
        </footer>
    )
}