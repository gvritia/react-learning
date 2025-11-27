import {cars as carsDate} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [cars, setCars] = useState(carsDate);

    // Для загрузки с сервера
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/cars');

            setCars(response.data);
        }
    }, [])

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
            <div>
                {cars.length ? cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                    : <p>There are no cars</p>
                }
            </div>
        </div>
    )
}

export default Home
