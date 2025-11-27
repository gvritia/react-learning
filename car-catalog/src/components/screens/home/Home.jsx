import {cars as carsDate} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useState} from "react";

function Home() {
    const [cars, setCars] = useState(carsDate);


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
