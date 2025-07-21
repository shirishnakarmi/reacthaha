import '../assets/stylesss.css'
function CommonValuesCard({iconUrl,title}){
    return(
        <div className="our-values-card">
            <img className="icon" src={iconUrl} />
            <div className="text">{title}</div>
        </div>
    );
}
export default CommonValuesCard