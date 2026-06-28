import { useCallback, useMemo, useState } from "react"
import CallBackEx from "../CallBackEx"
import pow from "../Healper/pow"

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

    const powResult = useMemo(() => {
        pow()
    }, [])

    return (
        <>
            <div>Result is: {counter}</div>
            <CallBackEx onCounter={handleChange} onReset={handelResetNumber} />
            <div>{powResult}</div>
        </>
    )
}

export default CallBack