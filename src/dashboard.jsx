import './assets/stylesss.css'
import DashboardBanner from './components/dashboard_banner';
import CommonTitles from './components/common_titles';
import CommonOurProgramsCard from './components/common_our_programs_card';
import CommonValuesCard from './components/common_our_values_card';

function Dashboard() {
    return (


        <main>
            <DashboardBanner />
            <div className='our-programs'>
                <CommonOurProgramsCard title={"CSIT"}
                    description={"hhah"}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_9.jpg"} />
                <CommonOurProgramsCard title={"BBA"}
                    description={"hhah"}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_9.jpg"} />
                <CommonOurProgramsCard title={"BBA"}
                    description={"hhah"}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_9.jpg"} />
            </div>
            <CommonTitles titles={"OUR VALUES"} description={"not just any programs we provide the excellent teaching learning experience to prepare you in your career"} />
            <CommonTitles titles={"OUR VALUES"} description={"not just any programs we provide the excellent teaching learning experience to prepare you in your career"} />
            <div className='our-values-grid'>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                 <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>
                 <CommonValuesCard
                iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                title={"hahha"}/>


            </div>
            
            
        </main>


    )
}
export default Dashboard;