import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';


// home, shop, contact, about

function Header(props) {

    const [responsiveHeaderExpanded, setResponsiveHeaderExpanded] = useState(false);

    const [shopMenuExpanded, setShopMenuExpanded] = useState(false);

    const handleResponsiveClick = () => setResponsiveHeaderExpanded(!responsiveHeaderExpanded);
    const handleShopMenu = () => setShopMenuExpanded(!shopMenuExpanded);



    return (
       <>
        <header style={{ height: responsiveHeaderExpanded ? '500px' : '70px', backgroundColor:  props.color ? props.color : '#2D75E0'}}>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <Link onMouseEnter={handleShopMenu}>Shop</Link>
                <img alt='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1719705600&semt=sph'></img>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    responsiveHeaderExpanded ? <button className='responsive-menu-btn' onClick={handleResponsiveClick}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button> : <button className='responsive-menu-btn' onClick={handleResponsiveClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                }
            </nav>
            {
                responsiveHeaderExpanded ? <div id='responsive-menu-wrapper'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                            <div id='mobile-shop-wrapper' style={{backgroundColor:  props.color ? props.color : '#2D75E0'}}>
                                <dl>
                                    <dt>Women</dt>
                                    <dd><Link to='/packages/F' onClick={handleResponsiveClick}>Packages</Link></dd>
                                    <dd><Link>Items</Link></dd>
                                    <dt>Men</dt>
                                    <dd><Link to='/packages/M' onClick={handleResponsiveClick}>Packages</Link></dd>
                                    <dd><Link>Items</Link></dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div> : <></>
            }
        </header>
       {
        shopMenuExpanded ?  <div id='shop-header' style={{ height: shopMenuExpanded ? '40px' : 0, backgroundColor: props.color ? props.color : '#2d75e0'}}>
        <ul>
            <li>
                <Link to='/packages/F'>Packages For Women</Link>
            </li>
            <li>
                <Link to='/packages/M'>Packages For Men</Link>
            </li>
        </ul>
    </div>: <></>
       }
       </>
    )
}

export default Header;