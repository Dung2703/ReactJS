import { useEffect, useState } from "react";

function UseEffect3() {
    const [data, setData] = useState([]);
    const limit = 10;
    const [pageActive, setPageActive] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.products);
                setQuantityPage(Math.ceil(data.total / limit));
            });
    }, [pageActive]);

    const handleClickPagination = (e) => {
        setPageActive(e);
    }

    console.log(quantityPage);
    return (
        <>
            <h1>UseEffect3</h1>
            <ul className="pagination">
                {[...Array(quantityPage)].map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleClickPagination(index)}>{index + 1}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default UseEffect3