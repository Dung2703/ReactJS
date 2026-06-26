import { useState, useRef } from "react";

function RandomGift() {
    const [Result, setResult] = useState("");
    const gift = ["car", "motobike", "PC", "Phone", "House"]
    const counterRef = useRef(0)
    const handleRandom = () => {
        if (counterRef.current < 3) {
            const Random = Math.floor(Math.random() * gift.length)
            setResult(gift[Random])
            counterRef.current = counterRef.current + 1;
        } else {
            alert("No more Change")
        }
    }
    console.log(counterRef)
    return (
        <>
            <button onClick={handleRandom}>Random</button>
            <div>Your gift is: {Result}</div>
        </>
    )
}

export default RandomGift