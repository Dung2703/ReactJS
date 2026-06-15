function Menu() {
    const arrayMenu = [
        "Home",
        "About",
        "Contact",
        "Blog",
        "Login"
    ]
    return (
        <>
            <ul>
                {arrayMenu.map((item, index) => (<li key={index}>{item}</li>)
                )}
            </ul>
        </>

    )
}

export default Menu;