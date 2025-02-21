import React from 'react'
import phone from '../assets/phone.png';
import { FaInstagramSquare, FaWhatsapp, FaFacebook, FaPhoneSquareAlt } from "react-icons/fa";
import wha from '../assets/wha.png';
import fb from '../assets/fbb.png';
import logo from '../assets/logo.png';
import logocopy from '../assets/logo - Copy.png';
import '../Styles/footer.css';
const Footer = () => {
    return (
    
        <div className='footer'>
            <div class="sidefooter">
                <img src={logo} alt="Logo" id="lol" />
                <h6>CARPROF</h6><br />
                <h5>Carprof is the most trusted car <br />dealership in Estonia!</h5><br /><br />
                <div class="icons">
                    <FaFacebook  className='social'/>
                    <FaInstagramSquare className='social'/>
                    <FaWhatsapp className='social'/>
                    <FaPhoneSquareAlt className='social'/>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our cars</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Sell your car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="middlepart">
                <h3>Fully serviced used cars with <br />additional warranty!
                </h3>
                <h2>Peterburi tee 71, Tallinn <br />
                    +250780738126 <br />
                    carprof.ee@gmail.com<br /></h2>
            </div>
            <div class="rightpart">
                <button id="time">Mon - Fri 10-19 Sat 10-16</button>
                <img src={logocopy} alt="" id="logo1" />
                <h4 className='copyright'> Copyright&copy; 2023 Carprof Privacy Policy</h4>
            </div>
        </div>
        
    )
}

export default Footer
