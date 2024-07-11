import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const updateFieldValue = () => {
        setValue('fullName', 'Альберт Иванов');
        setValue('phone', '+1234567890');
        setValue('email', 'ivan@example.com');
        setValue('city', 'Кривой Рог');
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fullName">ФИО</label>
                <input
                    id="fullName"
                    {...register("fullName", { required: "ФИО обязательно" })}
                />
                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>

            <div>
                <label htmlFor="phone">Телефон</label>
                <input
                    id="phone"
                    {...register("phone", {
                        required: "Телефон обязателен",
                        pattern: {
                            value: /^\+?\d{10,15}$/,
                            message: "Некорректный номер телефона"
                        }
                    })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Некорректный email адрес"
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="city">Город проживания</label>
                <input
                    id="city"
                    {...register("city", { required: "Город проживания обязателен" })}
                />
                {errors.city && <p>{errors.city.message}</p>}
            </div>

            <button onClick={updateFieldValue}>Обнулить</button>
        </form>
    );
}

export default Form;
