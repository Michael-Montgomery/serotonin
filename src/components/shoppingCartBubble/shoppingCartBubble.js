import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shoppingCartBubble.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ShoppingCartBubble() {
    return(
        <>
        <div id='cart-bubble-wrapper'>
        <p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
        </div>
        </>
    )
}

export default ShoppingCartBubble;