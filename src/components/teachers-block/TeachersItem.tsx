export interface ITeacherItemProps {
    photo: string,
    teacherName:string,
    possition: string
}

export const TeachersItem: React.FC<ITeacherItemProps> = ({photo, teacherName, possition}) => {
     return (
        <div className='teachers__item'>
            <div className='teachers__item-photo'> <img src={photo} alt={teacherName} />
            </div>
            <p className='teachers__item-name'>{teacherName} <br/> <span className='teachers__item-possition'>{possition}</span></p>
            <button type='button' className='teachers__item-biography'>
            Биография
            </button>
        </div>
     )
}