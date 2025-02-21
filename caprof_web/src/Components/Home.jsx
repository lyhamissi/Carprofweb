import React from 'react'
import '../Styles/home.css'
import background from '../assets/10006.webp';
import car1 from '../assets/car.jpeg';
import car2 from '../assets/car1.jpeg';
import car4 from '../assets/car3.jpeg';
import car5 from '../assets/car4.jpeg';
import car6 from '../assets/10030.webp';
import car7 from '../assets/10031.webp';
import car8 from '../assets/10043.webp';
import car9 from '../assets/10049.webp';
import car10 from '../assets/10055.webp';
import person1 from '../assets/10021.webp';
import person2 from '../assets/10022.webp';
import person3 from '../assets/10023.webp';
import logo from "../assets/logo.png";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import car11 from '../assets/10027.webp';
import car12 from '../assets/10028.webp';
import car13 from '../assets/10029.webp';
import car133 from '../assets/10008.jpg';
import car14 from '../assets/10030.webp';
import car16 from '../assets/10031.webp';
import car17 from '../assets/10001.png';
import { Link } from 'react-router-dom';
export const cars = [

    {
        id: 1,
        image: car1,
        title: "2014 Land Rover Range Rover Autobiography Supercharged",
        details: "138 900 km",
        cerfitication: "Certified",
        feature1: "Automatic",
        feature2: "Diesel",
        feature3: "Four wheel drive",
        price: "34 999€",
        installement: "Montly payment from 380€",
    },
    {
        id: 2,
        image: car2,
        title: "2017 BMW X5 M- Sportpakett",
        details: "281 400 km",
        cerfitication: "Certified",
        feature1: "Automatic",
        feature2: "Diesel",
        feature3: "Four wheel drive",
        price: "27 999€",
        installement: "Montly payment from 300€",
    },
    {
        id: 3,
        image: car133,
        title: "2019 Volswagen Passat Alltrack 4Motion",
        details: "92 700 km",
        cerfitication: "Certified",
        feature1: "Automatic",
        feature2: "Diesel",
        feature3: "Four wheel drive",
        price: "27 899€",
        installement: "Montly payment from 300€",
    },
    {
        id: 4,
        image: car4,
        title: "2015 Volkswagen Passat Variant Comfortline",
        details: "159 900 km",
        cerfitication: "Certified",
        feature1: "Automatic",
        feature2: "Diesel",
        feature3: "Four wheel drive",
        price: "13 999€",
        installement: "Montly payment from 150€",
    }
]
const Home = () => {
    const images = [
        { id: 1, image: car6 },
        { id: 2, image: car7 },
        { id: 3, image: car8 },
        { id: 4, image: car9 },
        { id: 5, image: car10 },
    ];
    const persons = [
        { ids: 1, profile: person1 },
        { ids: 2, profile: person2 },
        { ids: 3, profile: person3 },
    ];
    const cards = [
        {
            id: 1,
            image: car11,
            title: "Customer Feedback",
            explantion: "Highest customer feedback rating in Estonia.We uphold our promises to clients and partners. Honesty is of utmost importance to us.."
        },
        {
            id: 2,
            image: car12,
            title: "Quality Cars",
            explantion: "Each vehicle undergoes a thorough preparation process and technical inspection.The cars come with either CarProf or factory warranty.Our selection includes vehicles with a  reliable history and original mileage.."
        },
        {
            id: 3,
            image: car13,
            title: "Fair Price",
            explantion: "There are no additional costs when purchasing a car.Our prices are always competitive. We have a wide selection of cars available on-site.."
        },
    ]
    const circles = [
        {
            id: 1,
            image: car14
        },
        {
            id: 2,
            image: car5
        },
        {
            id: 3,
            image: car16
        },
        {
            id: 4,
            image: car17
        }

    ]
    return (
        <div>
            <div class="img">
                <img src={background} alt="" />
                <div class="box">
                    <h1>CARPROF</h1>
                    <p>Used cars with extra warranty, checked history, and <br /> proven mileage.</p>
                    <div class="sele">
                        <select name="" id="sele">
                            <option value="">Select a make</option>
                            <option value="">Audi</option>
                            <option value="">BMW</option>
                            <option value="">Bentley</option>
                            <option value="">Citroen</option>
                            <option value="">Dacia</option>
                            <option value="">Ford</option>
                            <option value="">Honda</option>
                            <option value="">Hyundai</option>
                            <option value="">Jaguar</option>
                            <option value="">Jeep</option>
                            <option value="">Kia</option>
                            <option value="">Land Rover</option>
                            <option value="">Lexus</option>
                            <option value="">Mazda</option>
                            <option value="">Mercedes-Benz</option>
                            <option value="">Nissan</option>
                            <option value="">Opel</option>
                            <option value="">Peugeot</option>
                            <option value="">Porsche</option>
                            <option value="">Renault</option>
                            <option value="">Sea Doo</option>
                            <option value="">Skoda</option>
                            <option value="">Subaru</option>
                            <option value="">Toyota</option>
                            <option value="">Volkswagen</option>
                            <option value="">Volvo</option>
                        </select>
                        <select name="" id="seli">
                            <option value="">Select a model</option>
                        </select>
                        <button class="custom-button">
                            101 vehicles <span class="arrow">→</span>
                        </button>

                    </div>
                </div>
            </div>
            <div class="lined-text">New Arrivals</div>
            <div className="card-container">
                {cars.map((car1, index) => (
                    <div className="card" key={index}>
                        <div className="card-image">
                            <img src={car1.image} alt="" />
                        </div>
                        <div className="card-content">
                            <h3 className='card-title'>{car1.title}</h3>
                            <p className='card-mileage'>{car1.details}
                                <span className='certified-icon'><img src={logo} alt="" />{car1.cerfitication}</span></p>
                            <div className="features">
                                <span className='feature'><IoMdSettings />{car1.feature1}</span>
                                <span className='feature'><BsFillFuelPumpDieselFill />{car1.feature2}</span>
                                <span className='feature'><GiCarWheel />{car1.feature3}</span>
                            </div>
                            <div className="card-footer">
                                <div className="price">{car1.price}</div>
                                <div className="installement">{car1.installement}</div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button class="custom-buttons">
                <Link to="/all" className='link'>All offers<span class="arrows">→</span></Link>
            </button>
            <div className="buttons">
                <FcGoogle className='google' /><span>Read customer feedback on.</span>
                <FaFacebook className='facebook' /><span>Discover the latest news on our Facebook!</span>
            </div>
            <div
                className="cards-container"
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {images.map((item) => {
                    const randomRotation = Math.random() * 10 - 5;
                    return (
                        <div
                            key={item.id}
                            className="cards"
                            style={{
                                transform: `rotate(${randomRotation}deg)`,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                width: "15rem",
                                height: "14rem",
                                cursor: "pointer", // Makes it clear that the cards are interactive
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = `rotate(${randomRotation + 10}deg) scale(1.05)`; // Add rotation and zoom on hover
                                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = `rotate(${randomRotation}deg)`; // Reset the rotation when not hovering
                                e.target.style.boxShadow = "none"; // Reset shadow
                            }}
                        >
                            <img
                                src={item.image}
                                alt={`Car ${item.id}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "0.6rem",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="people">
                <h2>Our team is always there to help!</h2>
                <div className="circles-container">
                    {persons.map((person, index) => (
                        <div className="circles" key={index}>
                            <img src={person.profile} alt="" />
                        </div>
                    ))}
                </div>
                <h4>Would you like to be called back? Leave your contacts and we will contact you <br />as soon as possible.</h4>
                <div className="input">
                    <form action="">
                        <input type="text" placeholder="Name" required />
                        <input type="text" placeholder="Phone" required />
                        <input type="email" placeholder="E-mail" required />
                        <button type='submit' value="Send" className='sub'>Send</button>
                    </form>
                </div>
            </div>
            <div class="heading">
                <h4>Why do clients choose us?</h4>
            </div>
            <div className="cards2">
                {cards.map((card, index) => (
                    <div className="cardss" key={index}>
                        <div className="cards-image">
                            <img src={card.image} alt="" />
                        </div>
                        <h3 className='cardss-title'>{card.title}</h3>
                        <p className='cardss-mileage'>{card.explantion}</p>
                    </div>
                ))}
            </div>
            <div className="circle-container">
                {circles.map((circle, index) => (
                    <div className="circle" key={index}>
                        <img src={circle.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
