import {cars as carsDate} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

function Home() {
    const [cars, setCars] = useState(carsDate);

    const {user, setUser} = useContext(AuthContext);

    // const nav = useNavigate()
    return (
        <div>
            <h1>Cars catalog</h1>
            {user ?
                <>
                    <h2>Welcome, {user.name}</h2>
                    <button className='btn' onClick={() => setUser(null)}>Logout</button>
                </>
                : <button className='btn' onClick={() => setUser({name: 'Max'})}>LogIn</button>
            }

            {/*<button onClick={() => nav('/car/1')}>GO</button>*/}

            <CreateCarForm setCars={setCars}/>
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
