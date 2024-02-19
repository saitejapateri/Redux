import classes from './Counter.module.css';
import {counterActions} from '../store/counter.js'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();

  const counter =  useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const handleIncrement = ()=>{
    dispatch(counterActions.increment())
  }

  const handleDecrement = () =>{
    dispatch(counterActions.decrement())
  }

  const handleInc = () =>{
    dispatch(counterActions.increase(10));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleInc}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
