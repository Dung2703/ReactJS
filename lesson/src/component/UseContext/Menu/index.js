import { useContext } from "react";
import { MenuContext } from "../Layout";

function Menu() {
    const menus = useContext(MenuContext);
    console.log(menus);
    return (
        <>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
        </>
    );
}

export default Menu;