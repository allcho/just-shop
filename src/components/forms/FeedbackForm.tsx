"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import classes from './feedbackForm.module.scss';

type IFormInput = {
    name: string
    email: string
    message: string
}

export const FeedbackForm = () =>{
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <label>
                Ваше имя
                <input {...register('name', { required: true, maxLength: 200 })}/>
                {errors.name && <p role="alert">Заполните поле имя</p>}
            </label>
            <label>
                Ваше email
                <input {...register('email', { 
                    required: {
                        value: true,
                        message: "Заполните поле email"
                        },
                        pattern: {
                        value:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                        message: "Введите email адресс"
                        }
                })} />
                {errors.email && <p role="alert">{errors.email.message}</p>}
            </label>
            <label>
                Текст сообщения
                <textarea {...register("message", { required: true, maxLength: 3000 })} />
                {errors.message && <p role="alert">Введите текст сообщения</p>}
            </label>
            <button type="submit">Отправить сообщение</button>
        </form>
    )
}