import styles from './CreateCarForm.module.css';
import {useForm} from "react-hook-form";

function CreateCarForm({setCars}) {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange',
    })

    const createCar = (data) => {
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
            {errors?.name && (
                <p style={{ color: 'red' }}>
                    {errors.name.message}
                </p>
            )}

            <input
                placeholder="Price"
                type="number"
                {...register("price", {
                    required: 'Price is required',
                    valueAsNumber: true
                })}
            />
            {errors?.price && (
                <p style={{ color: 'red' }}>
                    {errors.price.message}
                </p>
            )}

            <input
                placeholder="Image"
                {...register("image", {
                    required: 'Image is required'
                })}
            />
            {errors?.image && (
                <p style={{ color: 'red' }}>
                    {errors.image.message}
                </p>
            )}

            <button type="submit" className="btn">Create</button>
        </form>
    )
}

export default CreateCarForm