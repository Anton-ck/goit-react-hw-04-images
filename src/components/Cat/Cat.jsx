import css from './Cat.module.css';

const Cat = () => {
  return (
    <div className={css.cat__wrapper}>
          <p className={ css.cat__message}>Sorry, we have not found your query.</p>
      <div className={css.main}>
        <span className={css.stand}></span>
        <div className={css.cat}>
          <div className={css.body}></div>
          <div className={css.head}>
            <div className={css.ear}></div>
            <div className={css.ear}></div>
          </div>
          <div className={css.face}>
            <div className={css.nose}></div>
            <div className={css.whisker__container}>
              <div className={css.whisker}></div>
              <div className={css.whisker}></div>
            </div>
            <div className={css.whisker__container}>
              <div className={css.whisker}></div>
              <div className={css.whisker}></div>
            </div>
          </div>
          <div className={css.tail__container}>
            <div className={css.tail}>
              <div className={css.tail}>
                <div className={css.tail}>
                  <div className={css.tail}>
                    <div className={css.tail}>
                      <div className={css.tail}>
                        <div className={css.tail}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
