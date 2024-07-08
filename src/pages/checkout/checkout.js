import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/header';
import './checkout.css';
import { faCircleArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../../context/cartContext';
import { useContext, useState } from 'react';
// import { faApplePay } from '@fortawesome/free-brands-svg-icons/faApplePay';
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../components/footer/footer';


function Checkout() {

    const cartFromContext = useContext(cartContext);

    const [cart, setCart] = useState(cartFromContext);

    const [addressCopied, setAddressCopied] = useState(false);

    // form state variables

    const [shippingFName, setShippingFName] = useState('');
    const [shippingLName, setShippingLName] = useState('');
    const [shippingAddress1, setShippingAddress1] = useState('');
    const [shippingAddress2, setShippingAddress2] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [shippingState, setShippingState] = useState('default');
    const [shippingZip, setShippingZip] = useState('');



    const [billingFName, setBillingFName] = useState('');
    const [billingLName, setbillingLName] = useState('');
    const [billingAddress1, setBillingAddress1] = useState('');
    const [billingAddress2, setBillingAddress2] = useState('');
    const [billingCity, setBillingCity] = useState('');
    const [billingState, setBillingState] = useState('default');
    const [billingZip, setBillingZip] = useState('');


    const [ccNumber, setCcNumber] = useState('');
    const [ccExpiry, setCcExpiry] = useState('');
    const [ccCvv, setCcCvv] = useState('');

    // console.log(cart)

    let cartSubtotal = cart.reduce((prev, next) => prev.price + next.price);
    let tax = cartSubtotal * 0.07.toFixed(2);
    let total = Math.ceil(cartSubtotal + tax);

    console.log(cartSubtotal);

    return (
        <>
            <cartContext.Provider value={cart}>
                <Header></Header>

                <div id='checkout-wrapper'>
                    <h2>Checkout</h2>
                    <div id='checkout-info-wrapper'>
                        <button id='continue-shop-btn'><FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon> Continue Shopping</button>
                        <details open>
                            <summary>Shipping Information</summary>
                            <form id='shipping-info-form'>
                                <input type='text' placeholder='First Name' className='fName' required min={2} maxLength={20} value={shippingFName} onChange={(e) => setShippingFName(e.target.value)} ></input>
                                <input type='text' placeholder='Last Name' className='lName' required min={2} maxLength={20} value={shippingLName} onChange={(e) => setShippingLName(e.target.value)}></input><br></br>
                                <input type='text' placeholder='Street Address' className='address' required min={5} maxLength={40} value={shippingAddress1} onChange={(e) => setShippingAddress1(e.target.value)}></input><br></br>
                                <input type='text' placeholder='Address Line 2' className='address' min={2} maxLength={20} value={shippingAddress2} onChange={(e) => setShippingAddress2(e.target.value)}></input><br></br>
                                <input type='text' placeholder='City' className='city' required min={2} maxLength={40} value={shippingCity} onChange={(e) => setShippingCity(e.target.value)}></input>

                                <select value={shippingState} onChange={(e) => setShippingState(e.target.value)}>
                                    <option value='default'>State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <input type='text' placeholder='Zip' className='zip' value={shippingZip} onChange={(e) => setShippingZip(e.target.value)}></input>
                            </form>
                        </details>
                        <details open>
                            <summary>Billing Information</summary>
                            <label>
                                <input type="checkbox" onClick={(e) => {
                                    if (e.target.checked) {
                                        setAddressCopied(true);
                                        setBillingFName(shippingFName);
                                        setbillingLName(shippingLName);
                                        setBillingAddress1(shippingAddress1);
                                        setBillingAddress2(shippingAddress2);
                                        setBillingCity(shippingCity);
                                        setBillingState(shippingState);
                                        setBillingZip(shippingZip);
                                    } else {
                                        setAddressCopied(false)
                                    }
                                }}></input>
                                Same as shipping address
                            </label>
                            <form id='billing-info-form'>
                                <input type='text' placeholder='First Name' className='fName' value={billingFName} onChange={(e) => setBillingFName(e.target.value)} disabled={addressCopied}></input>
                                <input type='text' placeholder='First Name' className='lName' value={billingLName} onChange={(e) => setbillingLName(e.target.value)} disabled={addressCopied}></input><br></br>
                                <input type='text' placeholder='Street Address' className='address' value={billingAddress1} onChange={(e) => setBillingAddress1(e.target.value)} disabled={addressCopied}></input><br></br>
                                <input type='text' placeholder='Address Line 2' className='address' value={billingAddress2} onChange={(e) => setBillingAddress2(e.target.value)} disabled={addressCopied}></input><br></br>
                                <input type='text' placeholder='City' className='city' value={billingCity} onChange={(e) => setBillingCity(e.target.value)} disabled={addressCopied}></input>
                                <select value={billingState} onChange={(e) => setBillingState(e.target.value)} disabled={addressCopied}>
                                    <option>State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <input type='text' placeholder='Zip' className='zip' value={billingZip} onChange={(e) => setBillingZip(e.target.value)} disabled={addressCopied}></input>
                            </form>
                        </details>
                        <details open>
                            <summary>Payment Information</summary>
                            <ul id='payment-options-list'>
                                <li><button><FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon><FontAwesomeIcon icon={faCcMastercard}></FontAwesomeIcon></button></li>
                                {/* <li><button><FontAwesomeIcon icon={faApplePay}></FontAwesomeIcon></button></li> */}
                            </ul>
                            <input type='number' placeholder='Card Number' className='card-number' value={ccNumber} onChange={(e) => setCcNumber(e.target.value)} required></input>
                            <input type='text' placeholder='Expiry' className='card-expiry' value={ccExpiry} onChange={(e) => setCcExpiry(e.target.value)} required ></input>
                            <input type='number' placeholder='CVV' className='card-cvv' value={ccCvv} onChange={(e) => setCcCvv(e.target.value)} required></input>
                        </details>
                        <button id='place-order-btn' onClick={() => window.location.href = `/confirmation/546-586-865-789`}>Place Secure Order {`($${total})`}</button>
                    </div>
                    <div id='cart-wrapper'>
                        <h3>{`Your Cart (${cart.length})`}</h3>
                        <ul>
                            {
                                cart.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className='cart-item-wrapper'>
                                                <p className='cart-item-name'>{item.title}</p>

                                                <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                                <p className='cart-item-price'>{item.price}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div id='total-wrapper'>
                            <p>Subtotal: {`$${cartSubtotal}`}</p>
                            <p>Tax: {`$${tax.toFixed(2)}`}</p>
                            <p>Total: {`$${total}`}</p>
                        </div>
                    </div>

                </div>
            </cartContext.Provider>
            <Footer></Footer>
        </>
    )
}

export default Checkout;