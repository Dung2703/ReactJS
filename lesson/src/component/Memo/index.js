import { useState } from "react"
import MemoEx from "../MemoEx"

function Memo() {
    const [counter, setCounter] = useState(0)
    const handleChange = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <MemoEx />
            <div>Result is: {counter}</div>
            <button onClick={handleChange}>Click</button>
        </>
    )
}

export default Memo