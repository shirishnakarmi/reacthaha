import './assets/stylesss.css'
import CommonTitles from './components/common_titles';
import CommonCourses from './components/common_courses_card';
import CoursePopUpModal from './components/course_popup_modal';
import { useState } from 'react';
function Courses() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <main>
            <CommonTitles titles={"Courses"} description={"not just any programs we provide the excellent teaching learning experience to prepare you in your career"} />
            <div className='courses-banner'>
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"} title={"B.Sc.CSIT"} description={"hhh"} year={"2"} semester={"2"} />
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"} title={"BBA"} description={"hhh"} year={"2"} semester={"2"} />
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"} title={"MBA"} description={"hhh"} year={"2"} semester={"2"} />
            </div>
            <button onClick={() => setModalOpen(true)}>click to open popup</button>
            <CoursePopUpModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        </main>
    )
}
export default Courses;