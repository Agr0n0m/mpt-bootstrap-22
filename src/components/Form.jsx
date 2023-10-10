import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    axios.post('https://6525301d67cfb1e59ce6d5ca.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3'>
          <input {...register('lastName', {required:true, maxLength:50, pattern:/^[А-Яа-я]+$/i})} type='text' className='form-control' placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(<p>Поле обязательно для заполнения</p>)}
        {errors?.lastName?.type === 'maxLength'&&(<p>В поле не более 50 символов</p>)}
        {errors?.lastName?.type === 'pattern'&&(<p>Допустимы только символы кирилицы</p>)}

        <div className='input-group mb-3'>
          <input {...register('firstName', {required:true, maxLength:50, pattern:/^[А-Яа-я]+$/i})} type='text' className='form-control' placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(<p>Поле обязательно для заполнения</p>)}
        {errors?.firstName?.type === 'maxLength'&&(<p>В поле не более 50 символов</p>)}
        {errors?.firstName?.type === 'pattern'&&(<p>Допустимы только символы кирилицы</p>)}

        <div className='input-group mb-3'>
          <input {...register('patronymic', {required:true, maxLength:50, pattern:/^[А-Яа-я]+$/i})} type='text' className='form-control' placeholder='Отчество'/>
        </div>
        {errors?.patronymic?.type === 'required'&&(<p>Поле обязательно для заполнения</p>)}
        {errors?.patronymic?.type === 'maxLength'&&(<p>В поле не более 50 символов</p>)}
        {errors?.patronymic?.type === 'pattern'&&(<p>Допустимы только символы кирилицы</p>)}

        <div className='input-group mb-3'>
          <input {...register('eMail', {required:true, pattern:/.+@.+\..+/i})} type='text' className='form-control' placeholder='email'/>
        </div>
        {errors?.eMail?.type === 'required'&&(<p>Поле обязательно для заполнения</p>)}
        {errors?.eMail?.type === 'pattern'&&(<p>Введен не email</p>)}
        

        <input className='btn btn-outline-primary' type="submit" />
      </form>
    </div>
  )
}

export default Form