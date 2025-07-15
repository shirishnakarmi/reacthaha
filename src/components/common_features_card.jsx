import '../assets/stylesss.css'
function CommonFeaturesCard({ imageUrl, title }) {
    return (
        <div className='common-features-card'>
            <img src={imageUrl} alt={title}/>
            <div className='common-features-card-content'>
                <div className='common-features-card-title'>
                    {title}
                </div>
            </div>
        </div>
    );
}
export default CommonFeaturesCard;