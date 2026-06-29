import { useReducer } from "react"

const reducer = (state, action) => {
    console.log(state, action)
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}
function Reducer() {
    const [counter, dispath] = useReducer(reducer, 0)
    return (
        <>
            <div>Result: {counter}</div>
            <button onClick={() => dispath("UP")}>Up</button>
            <button onClick={() => dispath("DOWN")}>Down</button>
            <button onClick={() => dispath("RESET")}>Reset</button>
        </>
    )
}

export default Reducer