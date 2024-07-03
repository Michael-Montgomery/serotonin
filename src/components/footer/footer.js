import './footer.css';

function Footer(props){
    return(
        <div id='footer-wrapper' style={{backgroundColor: props.color ? props.color : '#2D75E0'}}>
            <ul>
                <li><a href='http://www.apple.com' style={{color: props.color ? 'white' : 'black'}}>Support</a></li>
                <li><a href='http://www.apple.com' style={{color: props.color ? 'white' : 'black'}}>Chakras Information</a></li>
                <li><a href='http://www.apple.com' style={{color: props.color ? 'white' : 'black'}}>Privacy Policy</a></li>
                <li><a href='http://www.apple.com' style={{color: props.color ? 'white' : 'black'}}>Cookies Policy</a></li>
                <li><a href='http://www.apple.com' style={{color: props.color ? 'white' : 'black'}}>Sales & Refunds</a></li>
            </ul>
            <div id='lower-footer' style={{backgroundColor:  props.color ? props.color : '#2D75E0'}}>
                <p id='llc-text'>Seeking Serotonon LLC.</p>
                <a href='https://www.apple.com' id='site-credit-link'>Site by MM</a>
            </div>
        </div>
    )
}

export default Footer;