import { useCallback, useState } from "react"
import CallBackEx from "../CallBackEx"

function CallBack() {
    const [counter, setCounter] = useState(0)
    // const handleChange = () => {
    //     setCounter(counter + 1)
    // }
    const handleChange = useCallback(() => {
        setCounter(counter + 1)
    }, [])

    const handelResetNumber = useCallback(() => {
        setCounter(0)
    }, [])

    return (
        <>
            <div>Result is: {counter}</div>
            <CallBackEx onCounter={handleChange} onReset={handelResetNumber} />
        </>
    )
}

export default CallBack