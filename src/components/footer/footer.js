import './footer.css';

function Footer(props){
    return(
        <div id='footer-wrapper' style={{backgroundColor: props.color ? props.color : '#5e5a5a'}}>
            <ul>
                <li><a href='http://www.apple.com'>Support</a></li>
                <li><a href='http://www.apple.com'>Chakras Information</a></li>
                <li><a href='http://www.apple.com' >Privacy Policy</a></li>
                <li><a href='http://www.apple.com' >Cookies Policy</a></li>
                <li><a href='http://www.apple.com' >Sales & Refunds</a></li>
            </ul>
            <div id='lower-footer' style={{backgroundColor:  props.color ? props.color : '#2D75E0'}}>
                <p id='llc-text'>Seeking Serotonon LLC.</p>
                <a href='https://www.apple.com' id='site-credit-link'>Site by MM</a>
            </div>
        </div>
    )
}

export default Footer;