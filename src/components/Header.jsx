const Header = () => {
    return (

        <header >
            <h1>
                lOGI
            </h1>
            <P>
                {isLoggedIn ? <strong>Hello</strong>}
            </P>
        </header>

    )
}

export default Header;
