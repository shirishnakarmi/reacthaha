import './assets/stylesss.css'
function Header() {
    return (
        <header>
            <div class="title">Shikshyalaya</div>
            <nav class="menu">
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/courses'>Courses</a>
                <a href='/addmissions'>Admissions</a>
                <a href='/contact'>contact us</a>
            </nav>
            <div class="logout">
                <button>logout</button>
            </div>
        </header>
    );
}
export default Header;