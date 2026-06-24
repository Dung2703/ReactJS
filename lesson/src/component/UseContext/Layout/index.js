import Header from "../Header";
import { createContext } from "react";

export const MenuContext = createContext();

function Layout() {
    const menus = [
        "Home",
        "About",
        "Contact"
    ];

    return (
        <>
            <MenuContext.Provider value={menus}>
                <Header />
            </MenuContext.Provider>
            <div>Main content</div>
            <div>Footer</div>
        </>
    );
}

export default Layout;