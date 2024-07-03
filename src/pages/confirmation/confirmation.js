import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import './confirmation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../components/footer/footer';




function Confirmation() {

    const { orderNumber } = useParams();


    return (
        <>
        <Header></Header>
        <div id='confirmation-wrapper'>
            <h2>Thank you for your order.</h2>
            <p>Order Number: {`${orderNumber}`}<br></br>
                You will recieve an email confirmation shortly
            </p>
            <ul>
                <li>
                    <a href='https://www.apple.com'>
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href='https://www.apple.com'>
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href='https://www.apple.com'>
                        <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Confirmation;