import React from 'react';
import {useForm} from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import './styles.scss';


const ClientForm = ({save}) => {
    
    class Client{
        constructor(nombre, apell, mail, tel){
            this.name=nombre;
            this.surname=apell;
            this.email=mail;
            this.phone=tel  ;
        }
    }

    let email="";
    let confEmail="";

    const onBlurEmai=()=>{
        email=watch('email');
    }
    const onBlurConfirmEmai=()=>{
        email=watch('reqEmail');
    }


    const onSubmit = (datos)=>{
        // let actualClient = new Client(datos.name, datos.surname, datos.email, datos.phone);
        // save({...actualClient});

        let actualClient ={
            name:datos.name,
            surname:datos.surname,
            email:datos.email,
            phone:datos.phone,
        };
                console.log(actualClient);
        save(true);
    }


    const {register,formState:{errors},watch, handleSubmit}=useForm();



return (
    <div className='ClientForm'>
        <h3>Ingrese sus datos para confirmar la orden.</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='ClientFormField'>
                <label className='ClientFormLabel'>Nombre</label>
                <input className='ClientFormInput' type="text" {...register('name', {
                    required: true
                })}
                />
                {errors.name?.type === 'required' && <span className='formError'>Ingrese su nombre</span>}
            </div>
            <div className='ClientFormField'>
                <label className='ClientFormLabel'>Apellido</label>
                <input className='ClientFormInput' type="text" {...register('surname', {
                    required:true
                })}/>
                {errors.surname?.type === 'required' && <span className='formError'>Ingrese su apellido</span>}
            </div>
            <div className='ClientFormField'>
                <label className='ClientFormLabel'>Telefono</label>
                <input className='ClientFormInput' type="text" {...register('phone',{
                    minLength: 8
                })}/> 
                {errors.phone?.type==='minLength'&& <span className='formError'>El telefono debe tener entre 8 y 10 dígitos</span>}
            </div>
            <div className='ClientFormField'>
                <label className='ClientFormLabel'>Email</label>
                <input className='ClientFormInput' type="text" onBlur={onBlurEmai} name='email' ref="inputEmail" {...register('email', {
                    pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    required:true
                })}/>
                {errors.email?.type==='required' && <span className='formError'>Ingrese su email</span>}
                {errors.email?.type==='pattern' && <span className='formError'>Emai ingresado inválido</span> }
            </div>
            <div className='ClientFormField'>
                <label className='ClientFormLabel'>Confirmar Email</label>
                <input className='ClientFormInput' onBlur={onBlurConfirmEmai} type="text" {...register('reqEmail',{
                    required: true,
                    validate: ()=>{return confEmail==email}
                })}/>
                {errors.reqEmail?.type==='required' && <span className='formError'>Confirme su email</span>}
                {errors.reqEmail?.type==='validate' && <span className='formError'>Los emails ingresados no coinciden</span>}
            </div>
        <input type="submit" value="Continuar" className='btnConfirmClient'/>
        </form>
    </div>
  )
}

export default ClientForm