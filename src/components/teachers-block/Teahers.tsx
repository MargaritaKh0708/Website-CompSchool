import { TeachersItem, ITeacherItemProps} from "./TeachersItem"
import {Ellipse} from 'components/ellipse/Ellipse';
import photo1 from 'assets/img/teachers/teacher1.png';
import photo2 from 'assets/img/teachers/teacher2.png';
import photo3 from 'assets/img/teachers/teacher3.png';

//teachers 

const teachers: ITeacherItemProps[] = [
    {
        photo: photo1,
        teacherName: 'Дмитрий Иванов',
        possition: 'Специалист по видеокартам'
    },
    {
        photo: photo2,
        teacherName: 'Дмитрий Иванов',
        possition: 'Специалист по видеокартам'
    },
    {
        photo: photo3,
        teacherName: 'Дмитрий Иванов',
        possition: 'Специалист по видеокартам'
    }
]



export const Teachers: React. FC = () => {
     return (

        <section className='teachers'>
            <div className='teachers__wrapper wrapper'>
            <div className='teachers__title quick-start__title'>
                <Ellipse additionalClass='item_3'/>
                    <h2>Ваши преподаватели</h2>
            </div>
            <div className='teachers__list'> {teachers.map(teacher => (
                <TeachersItem teacherName={teacher.teacherName} possition={teacher.possition} photo={teacher.photo} key={teacher.photo}/>
            ))}</div>
           
            </div>
        </section>
     )
}