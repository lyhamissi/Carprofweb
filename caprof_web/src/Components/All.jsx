import React from 'react'
import car1 from '../assets/car.jpeg';
import car2 from '../assets/car1.jpeg';
import car3 from '../assets/car2.jpeg';
import car4 from '../assets/car3.jpeg';
import car5 from '../assets/car4.jpeg';
import car6 from '../assets/10001.jpg';
import car7 from '../assets/10002.jpg';
import car8 from '../assets/10003.jpg';
import car9 from '../assets/10004.jpg';
import car10 from '../assets/10005.jpg';
import car11 from '../assets/10006.jpg';
import car12 from '../assets/10007.jpg';
import car13 from '../assets/10008.jpg';
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import logo from "../assets/logo.png";
const All = () => {
    const cars = [

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
            image: car11,
            title: "2014 Volvo XC60",
            details: "221 000 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Diesel",
            feature3: "Four wheel drive",
            price: "12 999€",
            installement: "Montly payment from 140€",
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
        },
        {
            id: 5,
            image: car5,
            title: "2015 Volkswagen Passat Variant Comfortline",
            details: "273 700 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Diesel",
            feature3: "Four wheel drive",
            price: "11 899€",
            installement: "Montly payment from 130€",
        },
        {
            id: 6,
            image: car10,
            title: "2020 Skoda Kamiq Ambition",
            details: "65 500 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Petrol",
            feature3: "Four wheel drive",
            price: "15 399€",
            installement: "Montly payment from 170€",
        },
        {
            id: 7,
            image: car7,
            title: "2020 BMW 640 d Gran Coupe xDrive M- Sportpakett",
            details: "90 000 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Diesel",
            feature3: "Four wheel drive",
            price: "64 899€",
            installement: "Montly payment from 700€",
        },
        {
            id: 8,
            image: car8,
            title: "2018 Peugeot 308 GT- line PureTech 130",
            details: "85 500 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Petrol",
            feature3: "Four wheel drive",
            price: "12 999€",
            installement: "Montly payment from 140€",
        },
        {
            id: 9,
            image: car9,
            title: "2017 Volvo XC60 Inscription AWD",
            details: "81 000 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Diesel",
            feature3: "Four wheel drive",
            price: "29 999€",
            installement: "Montly payment from 320€",
        },
        {
            id: 10,
            image: car13,
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
            id: 11,
            image: car12,
            title: "2017 Porsche Cayenne Diesel",
            details: "174 400 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Diesel",
            feature3: "Four wheel drive",
            price: "31 999€",
            installement: "Montly payment from 350€",
        },
        {
            id: 12,
            image: car6,
            title: "2018 Volswagen Tiguan Highline 4Motion",
            details: "146 000 km",
            cerfitication: "Certified",
            feature1: "Automatic",
            feature2: "Petrol",
            feature3: "Four wheel drive",
            price: "21 199€",
            installement: "Montly payment from 230€",
        }
    ]
    return (
        <div>
            <div class="lined-text">Our Cars</div>
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
        </div>
    )
}

export default All
