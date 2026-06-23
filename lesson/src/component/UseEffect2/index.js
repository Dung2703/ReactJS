import { useEffect, useState } from "react";

function UseEffect2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setData(data.products);
            });
    }, []);

    console.log(data);
    return (
        <>
            <h1>UseEffect2</h1>
        </>
    )
}

export default UseEffect2