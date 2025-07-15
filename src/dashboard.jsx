import './assets/stylesss.css'
import DashboardBanner from './components/dashboard_banner';
import CommonTitles from './components/common_titles';
import CommonOurProgramsCard from './components/common_our_programs_card';
import CommonFeaturesCard from './components/common_features_card';

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
            <div className='common-features'>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                title={"hahahahh"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                title={"Hahahahaha"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                title={"hahahahh"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                title={"hahahahh"}/>
                
            </div>
            { <div className='common-features'>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                description={"hahahahh"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                description={"hahahahh"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                description={"hahahahh"}/>
                <CommonFeaturesCard imageUrl={"https://cdn-icons-png.flaticon.com/512/9029/9029931.png"}
                description={"hahahahh"}/>
            </div> }
            
        </main>


    )
}
export default Dashboard;