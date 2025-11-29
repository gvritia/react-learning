import {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {withAuth} from "../../../HOC/withAuth.jsx";

const CarDatail = () => {
    const {id} = useParams();
    const [car, setCar] = useState({});

    // Для загрузки с сервера
    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const data = await CarService.getById(id);

            setCar(data);
        }

        fetchData();
    }, [id])

    if (!car?.name) return (
        <p>Loading...</p>
    );

    return (
        <div>
            <Link to={`/`}>Back</Link>
            <CarDatail car={car}/>
        </div>
    )
}

export default withAuth(CarDatail);