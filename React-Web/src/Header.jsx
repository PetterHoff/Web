import "./Header.css" 
function Header(){

    return(
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="/">Beskrivelse</a></li>
                    <li><a href="/web_pages/booking.html">Booking</a></li>
                    <li><a href="/web_pages/kontakt.html">Kontakt Informasjon</a></li>
                    <li><a href="/web_pages/aktiviteter.html">Hjem</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header
