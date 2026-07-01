import { useSelector, useDispatch } from 'react-redux';
import { up, down, reset } from '../Redux/actions/counter';

function CounterRedux2() {
    const counter2 = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter2: {counter2}</h2>
            <button onClick={() => dispatch(up(2))}>UP 2</button>
            <button onClick={() => dispatch(down(5))}>DOWN 5</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    )
}

export default CounterRedux2;