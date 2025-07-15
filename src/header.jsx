import './assets/stylesss.css'
function Header() {
    return (
        <header>
            <div className="title">Shikshyalaya</div>
            <nav className="menu">
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/courses'>Courses</a>
                <a href='/addmissions'>Admissions</a>
                <a href='/contact'>contact us</a>
            </nav>
            <div className="logout">
                <button>logout</button>
            </div>
        </header>
    );
}
export default Header;