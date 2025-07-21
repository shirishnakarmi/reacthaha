import '../assets/stylesss.css'
function CommonCourses({imageUrl,title,description,year,semester}){
    return(
        <div className='our-courses-card'>
            <img src={imageUrl}/>
           <div className='courses-card-mini'>
            {title}
            <div className='our-courses-description'>
                {description}
            </div>
            <div className='common-year'>
               <span> Year:{year} - Semester:{semester}</span>
            </div>
            </div>
        </div>
    );
}
export default CommonCourses;