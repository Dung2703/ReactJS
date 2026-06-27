import { memo } from "react"

function MemoEx() {
    console.log("render Memo")
    return (
        <>
            <div>MemoEx</div>
        </>
    )
}

export default memo(MemoEx)