function Login() {
    const isLoggedIn = true;
    return (
        <>
            {isLoggedIn ? (<><div>Welcome!</div></>) : (<><div>Please login!</div></>)}
            {isLoggedIn ? (<><div>Avata!</div></>) : (<></>)}
            {isLoggedIn && (<><div>Avata!</div></>)}
        </>
    )
}

export default Login;