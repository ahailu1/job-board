import React, { useState} from 'react';
import { PropsWithChildren } from 'react';
import './styles/create-account.css';
import type { CreateAccountProps } from './create-account-interface';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from "yup";

const CreateAccount = () => {

    const formInputs = yup.object().shape({
        username: yup.string().min(8).required(),
        password: yup.string().min(8).required(),
        confirmPassword : yup.string().min(8, 'Must be at least 8 characters').required().oneOf([yup.ref('password')],'Passwords must Match'),
      }).required();



    type FormVals = {
        username: number;
        password : string;
        confirmPassword : string;
    };
//    const resolver: Resolver<FormVals> = async (values, event: React.FormEvent<HTMLFormElement>) => {    };
    const { register, handleSubmit, formState : { errors } } = useForm<FormVals>({resolver : yupResolver(formInputs)});

    
    const onSubmit : SubmitHandler<FormVals> = async (data) => {
        
        const {username, password, confirmPassword} = data;

try {
       let submitUser = await axios.post('http://localhost:3000/create-account', {
            username : username,
            password: password,
            confirmPassword: confirmPassword,
        });
        console.log(submitUser);
        console.log('here');
    } catch(err) {
        console.log(err);
        
        throw new Error();
    }
        console.log('submitted');
          console.log(data);
    };
    
    
    return (
    
    <div className = "container w-50 grid grid-rows-2 grid-cols-1 gap-2 p-5">
            
            <div className = ' col-span-full'>            
            <h1 className = "text-white">Create your Account</h1>            
            </div>
            
            <form className = '' method='POST' name='create_account_form' onSubmit = { handleSubmit(onSubmit) } >           
                <div className = 'grid grid-rows-4 grid-cols-1 gap-2'>
                 
                    <div className='border rounded'>
                    <input {...register('username')} className='p-2 w-full' type = "text" name = "username" placeholder='username' />                
                    {errors?.username && <p className = "text-white">{errors.username.message}</p>}


                    </div>

                    <div className='border rounded'>
                    <input {...register('password')} className='p-2 w-full' type = "password" name = "password" placeholder='password' />         
                    {errors?.password && <p className = "text-white">{errors.password.message}</p>}

                    </div>
                  
                    <div className='border rounded'>
                    <input {...register('confirmPassword')} className='p-2 w-full' type = "password" name = "confirmPassword" placeholder='confirm password' />                
                    {errors?.confirmPassword && <p className = "text-white">{errors.confirmPassword.message}</p>}

                    </div>
                 
                    <div className='flex justify-between'>
                        <div className=''><button className='bg-slate-900 text-dark'>Create</button></div>
                    </div>
              
                </div>              
            </form>       
        </div>
    )

};

export default CreateAccount;