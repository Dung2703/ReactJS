import { useEffect } from "react";

function UseEffect1() {

    useEffect(() => {
        let listItem = document.querySelectorAll("ul li");
        console.log(listItem);
    });
    return (
        <>
            <ul>
                <li>
                    title 1
                </li>
                <li>
                    title 2
                </li>
                <li>
                    title 3
                </li>
            </ul>
        </>
    )
}

export default UseEffect1;