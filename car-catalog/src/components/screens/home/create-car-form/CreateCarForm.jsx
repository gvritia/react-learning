import styles from './CreateCarForm.module.css';
import {useState} from "react";
import {useForm} from "react-hook-form";

const ClearData = {
    name: '',
    price: '',
    image: '',
}

function CreateCarForm({setCars}) {
    const [data, setData] = useState(ClearData);

    const {register, reset,
        handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange',
    })

    const createCar = data => {
        e.preventDefault()
        setCars(prev => [
            {
                id: prev.length + 1,
                ...data,
            },
            ...prev]
        );

        reset()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                placeholder="Name"
                {...register("name", { required: 'Name is required' })}
            />
            {errors?.name.message && (
                <p style={{ color: 'red' }}>
                    Name is required
                </p>
            )}
            <input
                placeholder="Price"
                {...register("price", { required: true })}
            />
            {errors?.price.message && (
                <p style={{ color: 'red' }}>
                    Price is required
                </p>
            )}
            <input
                placeholder="Image"
                {...register("image", { required: true })}
            />
            {errors?.image && (
                <p style={{ color: 'red' }}>
                    Image is required
                </p>
            )}
            <button className="btn">Create</button>
        </form>
    )
}

export default CreateCarForm