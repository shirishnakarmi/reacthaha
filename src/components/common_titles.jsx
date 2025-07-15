import '../assets/stylesss.css'
function CommonTitles ({titles,description}){
    return(
        <div className='common-titles'>
            <div className='common-titles-content'>
                <h1>{titles}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default CommonTitles;