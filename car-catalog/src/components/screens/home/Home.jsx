import {cars as carsDate} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useEffect, useState} from "react";
import CarService from "../../../service/car.service.js";
import {useNavigate} from "react-router-dom";

function Home() {
    const [cars, setCars] = useState(carsDate);

    // Для загрузки с сервера
    useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await CarService.getAll(); // Добавьте скобки
            setCars(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }
    fetchData(); // Вызовите функцию
}, [])

    // const nav = useNavigate()

    return (
        <div>
            <h1>Cars catalog</h1>
            {/*<button onClick={() => nav('/car/1')}>GO</button>*/}
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
