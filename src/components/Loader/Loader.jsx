import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <p className={css.loading}> Already loading...</p>
      <div className={css.birds}>
        <div className={css.birds__hatdove}>
          <div className={css.birds__hatdove__shadow}></div>
          <div className={css.birds__hatdove__head}>
            <div className={css.birds__hatdove__hat}></div>
            <div className={css.birds__hatdove__forehead}></div>
            <div className={css.birds__hatdove__eye}></div>
            <div className={css.birds__hatdove__eye}></div>
            <div className={css.birds__hatdove__beak}></div>
          </div>
          <div className={css.birds__hatdove__backwing}></div>
          <div className={css.birds__circles__1}></div>
          <div className={css.birds__hatdove__backleg}>
            <div className={css.birds__curly}></div>
          </div>
          <div className={css.birds__hatdove__body}></div>
          <div className={css.birds__hatdove__frontleg}>
            <div className={css.birds__curly}></div>
          </div>
          <div className={css.birds__hatdove__frontwing}></div>
          <div className={css.birds__circles__2}></div>
          <div className={css.birds__hatdove__frontwing__finger}></div>
          <div className={css.birds__hatdove__frontwing__finger}></div>
          <div className={css.birds__hatdove__frontwing__finger}></div>
        </div>
        <div className={css.birds__table}>
          <div className={css.birds__table__shadow}></div>
        </div>
        <div className={css.birds__laptop}></div>
        <div className={css.birds__laptop}>
          <div className={css.birds__monitor}>
            <div className={css.birds__code}></div>
          </div>
        </div>
        <div className={css.birds__coffee}></div>
        <div className={css.birds__feather}></div>
        <div className={css.birds__feather}></div>
        <div className={css.birds__rundove__shadow}></div>
        <div className={css.birds__rundove}>
          <div className={css.birds__rundove__backwing}>
            <div className={css.birds__finger}></div>
            <div className={css.birds__finger}></div>
            <div className={css.birds__finger}></div>
            <div className={css.birds__circles}></div>
          </div>
          <div className={css.birds__rundove__head}>
            <div className={css.birds__rundove__eye}></div>
            <div className={css.birds__rundove__eye}></div>
            <div className={css.birds__rundove__beak}></div>
          </div>
          <div className={css.birds__rundove__backleg}>
            <div className={css.birds__curly}></div>
          </div>
          <div className={css.birds__rundove__body}></div>
          <div className={css.birds__rundove__frontleg}>
            <div className={css.birds__curly}></div>
          </div>

          <div className={css.birds__rundove__frontwing}>
            <div className={css.birds__finger}></div>
            <div className={css.birds__finger}></div>
            <div className={css.birds__finger}></div>
            <div className={css.birds__circles}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
