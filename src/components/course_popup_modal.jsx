import '../assets/stylesss.css';
function CoursePopUpModal({ isModalOpen, setModalOpen }) {
    if (!isModalOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <button className='modal-close' onClick={() => setModalOpen(false)}>x</button>
                <h2 className='modal-title'>alert!!</h2>
                <div className='modal-content'>hello this is an example of pop up modal</div>
            </div>
        </div>
    );
}
export default CoursePopUpModal;