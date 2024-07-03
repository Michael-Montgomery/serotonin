import { useParams } from 'react-router-dom';
import './packages.css';
import Header from '../../components/header/header';
import packages from '../../data/packages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import PackageModal from '../../components/packagemodal/packagemodal';
import ShoppingCartBubble from '../../components/shoppingCartBubble/shoppingCartBubble';
import { cartContext } from '../../context/cartContext';
import Footer from '../../components/footer/footer';
// import { faClose } from '@fortawesome/free-solid-svg-icons';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};





function Packages() {

    const cartFromContext = useContext(cartContext)

    const [cart, setCart] = useState(cartFromContext)

    const [selectedIndex, setSelectedIndex] = useState(0);



    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //   subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const { gender } = useParams();

    console.log(gender)
    let genderedData = packages.filter((val) => val.gender === gender);
    return (



        <>
           <cartContext.Provider value={cart}>
           <Header color={gender === 'M' ? '#B2BEB5' : '#DB476E'}></Header>
            <div id='packages-wrapper' style={{backgroundColor: gender === 'M' ? '#B2BEB5' : '#DB476E'}}>
            {
                cart.length > 0 ? <ShoppingCartBubble></ShoppingCartBubble> : <></>
            }
                <h2>Packages for {gender === 'M' ? 'Men' : 'Women'}</h2>
                <ul id='packages-list'>
                    {
                        genderedData.map((val, idx) => {
                            return (
                                <li key={idx}>
                                    <div className='package-wrapper' onClick={() => {
                                        setSelectedIndex(idx);
                                        openModal();
                                    }} style={{backgroundColor: val.color}}>
                                        <p className='package-title'>{val.title}</p>
                                        <div className='package-thumbnail-wrapper' style={{ backgroundImage: `url(${val.imageLink})` }}></div>
                                        <p className='package-price'>{`$${val.price}`}</p>
                                        <div className='quick-buy-wrapper'>
                                            <ul className='package-options-list'>
                                                <li><button onClick={() => alert('quick buy!')}>Quick Buy <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <p id='package-modal-close'><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></p> */}
                <PackageModal package={genderedData[selectedIndex]}></PackageModal>
            </Modal>
        
           </cartContext.Provider>
           <Footer color={gender === 'M' ? '#B2BEB5' : '#DB476E'}></Footer>
           </>
    )
}

export default Packages;