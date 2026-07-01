import { useDispatch, useSelector } from 'react-redux'
import { up, down, reset } from '../Redux/actions/counter'

function CounterRedux() {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    console.log(counter);
    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch(up(5))}>UP 5</button>
            <button onClick={() => dispatch(down(3))}>DOWN 3</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    )
}
export default CounterRedux