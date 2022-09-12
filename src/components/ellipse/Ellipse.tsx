
interface EllipseProps {
    additionalClass: string;
}

export const Ellipse: React. FC<EllipseProps> = ({additionalClass}) => {
     return (
        <div className='ellipse'>
            <div className={`${additionalClass} ellipse__item`}/>
        </div>
     )
}
