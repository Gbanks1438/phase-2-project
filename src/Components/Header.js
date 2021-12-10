import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <header className="App-header">
        <nav>
            <ul>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/carlist'>Car Collection</NavLink>
                </li>
                <li>
                    <NavLink to='/form'>New Car Request Form</NavLink>
                </li>
            </ul>
        </nav>
<h1>Welcome to Jay Leno's Car Rentals</h1>
<img src="https://drivetribe.imgix.net/ajHPaLODRDa59ttjdjrSfw?w=1200&h=800&auto=format,compress&fit=crop&crop=faces&max-w=1280&max-h=720" alt="Jay Leno standing in front of a 1955 red Mercedes GullWing 300SL with the number 263 racing decal on the door. The background shows the Los Angeles city skyline." />
</header>
    )
}

export default Header;