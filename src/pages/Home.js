import './Home.css';
import Modal from '../components/Modal';
import ContactFrom from '../components/Form/ContactFrom';
import PageTitle from '../components/PageTitle';
import Resturent from '../components/Resturent';

const Home = () => {
    return(
        <div className="home_page">
            <PageTitle className="text-center" titleContent="Home page" />
            <div className='container' style={{paddingBottom:50}}>
            <Resturent />
            </div>
            <div className='container'>
                <Modal className="Home-modal" id="home_modal" DataButtonName="Open modal">
                    <ContactFrom className="row g-3" id="modal_from">
                    </ContactFrom>
                </Modal>
            </div>
        </div>
    );
}

export default Home;