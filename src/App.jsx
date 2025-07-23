import './assets/stylesss.css'
import './App.css'
import Dashboard from './dashboard.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Courses from './courses.jsx'
import About from './About.jsx'
import Admissions from './Admissions.jsx'
import Contacts from './Contacts.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// import Navbar from './compo/navbar.jsx'
// import Foot from './compo/foot.jsx'

function App() {


  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/addmissions" element={<Admissions/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    // <>
    // <Navbar/>
    // <i>Global Content</i>
    // <Outlet/>
    // <Foot/>
    // </>

  )
}

export default App;
