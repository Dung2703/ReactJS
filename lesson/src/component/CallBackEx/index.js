import { memo } from "react"

function CallBackEx(props) {
    const { onCounter, onReset } = props
    console.log("render CallBack")

    const handleClick = () => {
        onCounter()
    }

    const handleReset = () => {
        onReset()
    }

    return (
        <>
            <button onClick={handleClick}>Click</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default memo(CallBackEx)