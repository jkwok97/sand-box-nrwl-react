import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterStateActions } from '../store/counter-state';

const Counter = () => {
  const counterState = useSelector((state) => state.counter);

  const counter = counterState.counter;
  const showCounter = counterState.showCounter;

  // const counter = useSelector((state) => state.counter.counter);
  // const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'SHOW_COUNTER' });
  // };

  const incrementHandler = () => {
    dispatch(counterStateActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterStateActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterStateActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterStateActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
