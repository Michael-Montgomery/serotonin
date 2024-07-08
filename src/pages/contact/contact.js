import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './contact.css';

function Contact() {

    const [orderFieldVisible, setOrderFieldVisible] = useState(false);

    return (
        <>
            <Header></Header>
            <h2>Contact</h2>
            <form id='contact-form-wrapper'>
                <h2>We would love to hear from you</h2>
                <input placeholder='First Name' className='half'></input>
                <input placeholder='Last Name' className='half'></input><br></br>
                <input placeholder='Email Address' className='full'></input><br></br>
                <select onChange={(e) => {
                    if (e.target.value === 'ordersupport') {
                        setOrderFieldVisible(true)
                    } else {
                        setOrderFieldVisible(false)
                    }
                }} className='full'>
                    <option value='default'>Primary Contact Reason</option>
                    <option value='ordersupport'>Order Support</option>
                    <option value='reviews'>Reviews/Feedback</option>
                </select><br></br>
                {
                    orderFieldVisible ? <><input placeholder='Order Number' className='full'></input><br></br></> : <></>
                }
                <textarea placeholder='Your message here...' className='full'></textarea>
            </form>
            <Footer></Footer>
        </>
    )
}

export default Contact;