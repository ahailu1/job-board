import React, {useState} from 'react';
import { PropsWithChildren } from 'react';
import './styles/create-account.css';
import type { CreateAccountProps } from './create-account-interface';
import { useForm, Resolver } from 'react-hook-form';
const CreateAccount : React.FC<React.PropsWithChildren<CreateAccountProps>> = ({togglePage, formType} : CreateAccountProps) => {

    type FormVals = {
        username: string;
        password : string;
        confirmPassword : string;
    };
    const resolver: Resolver<FormVals> = async (values) => {


        return {
            username: values.username ? values.username : {},
            password: values.password ? values.password : {},
            confirmPassword: values.confirmPassword ? values.confirmPassword : {},
            errors: !values.username ? {
                firstName: {
                    type: 'required',
                    message: 'This is required.',
                  },
            } : {},
        };
    };
    const {register, handleSubmit, formState : {errors} } = useForm<FormVals>({resolver});

    
    const onSubmit = handleSubmit((data) => { });
    
    
    return (
    
    <div className = "container w-50 grid grid-rows-2 grid-cols-1 gap-2 p-5">
            
            <div className = ' col-span-full'>            
            <h1 className = "text-white">Create your Account</h1>            
            </div>
            
            <form className = '' method='POST' name='create_account_form'>           
              
                <div className = 'grid grid-rows-4 grid-cols-1 gap-2'>
                 
                    <div className='border rounded'>
                    <input {...register('username')} className='p-2 w-full' type = "text" name = "username" placeholder='username' />                
                    </div>
                 
                    <div className='border rounded'>
                    <input {...register('password')} className='p-2 w-full' type = "password" name = "user_password" placeholder='password' />         
                    </div>
                  
                    <div className='border rounded'>
                    <input className='p-2 w-full' type = "password" name = "confirm_password" placeholder='confirm password' />                
                    </div>
                 
                    <div className='flex justify-between'>
                        <div className=''><button className='bg-slate-900 text-dark'>Create</button></div>
                        <div><button onClick={() => togglePage(formType)} className='bg-neutral-300'>Sign In</button></div>                   
                    </div>
              
                </div>              
            </form>       
        </div>
    )

};

export default CreateAccount;