import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counterslice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "INCREASE" });

    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "INCREASE_BY", value: 5 });

    dispatch(counterActions.increaseBy(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREASE" });

    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    console.log(counter);
    dispatch(counterActions.toggleCounter());
    console.log(counter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
