import { Ellipse } from "components/ellipse/Ellipse";

export const ProgramBlock: React.FC = () => {
  return (
    <section className="program-block">
      <div className="program-block__wrapper wrapper">
        <Ellipse additionalClass="item_2" />
        <h2 className="program-block__title quick-start__title">
          Программа обучения
        </h2>
        <p className="program-block__subtitle quick-start__sub-title">
          Больше 90% учеников прошли полный курс и смогли собрать свой первый
          компьютер
        </p>
        <div className="program-block__scheme">
          <div className="program-block__scheme-side">
            <div className="program-block__scheme-side-item">
              <div className="program-block__scheme-side-item-text">
                <span>Неделя №1</span>
                <span>Красивая часть курса, которая помогает в успехе</span>
              </div>
              <span className="program-block__scheme-side-item-separator" />
            </div>
            <div className="program-block__scheme-side-item">
              <div className="program-block__scheme-side-item-text">
                <span>Неделя №3</span>
                <span>Красивая часть курса, которая помогает в успехе</span>
              </div>
              <span className="program-block__scheme-side-item-separator" />
            </div>
            <div className="program-block__scheme-side-item">
              <div className="program-block__scheme-side-item-text">
                <span>Неделя №5</span>
                <span>Красивая часть курса, которая помогает в успехе</span>
              </div>
              <span className="program-block__scheme-side-item-separator" />
            </div>
            <div className="program-block__scheme-side-item">
              <div className="program-block__scheme-side-item-text">
                <span>Неделя №7</span>
                <span>Красивая часть курса, которая помогает в успехе</span>
              </div>
              <span className="program-block__scheme-side-item-separator" />
            </div>
          </div>
          <div className="program-block__scheme-side-separator"></div>
          <div className="program-block__scheme-side">
            <div className="program-block__scheme-side-item">
              <span className="program-block__scheme-side-item-separator" />
              <div className="program-block__scheme-side-item-text program-block__scheme-side-item-text--reverse">
                <span>Неделя №2</span>
                <span >Красивая часть курса, которая помогает в успехе</span>
              </div>
            </div>
            <div className="program-block__scheme-side-item">
              <span className="program-block__scheme-side-item-separator" />
              <div className="program-block__scheme-side-item-text program-block__scheme-side-item-text--reverse">
                <span>Неделя №4</span>
                <span >Красивая часть курса, которая помогает в успехе</span>
              </div>
            </div>
            <div className="program-block__scheme-side-item">
            <span className="program-block__scheme-side-item-separator" />
              <div className="program-block__scheme-side-item-text program-block__scheme-side-item-text--reverse">
                <span>Неделя №6</span>
                <span>Красивая часть курса, которая помогает в успехе</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
