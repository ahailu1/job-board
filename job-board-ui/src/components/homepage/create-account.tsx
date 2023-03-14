import React, {useState} from 'react';
import { PropsWithChildren } from 'react';
import './styles/create-account.css';
import type { CreateAccountProps } from './create-account-interface';
const CreateAccount : React.FC<React.PropsWithChildren<CreateAccountProps>> = ({togglePage, formType} : CreateAccountProps) => {



    return (
        <div className = "container grid grid-rows-2 grid-cols-1 gap-2">
            <div className = 'py-5 col-span-full'>
            <h1 className = "text-black text-black">Create your Account</h1>
            </div>
                        <form className = ''>

                <div className = 'grid grid-rows-4 grid-cols-1 gap-2'>
                    <div className='border rounded'>
                    <input className='p-2 w-full' type = "text" name = "username" placeholder='username' />
                    </div>
                    <div className='border rounded'>
                    <input className='p-2 w-full' type = "password" name = "user_password" placeholder='password' />
                    </div>
                    <div className='border rounded'>
                    <input className='p-2 w-full' type = "password" name = "confirm_password" placeholder='confirm password' />
                    </div>
                    <div className='flex justify-between'>
                        <div className=''><button className='bg-slate-900 text-white'>Create</button></div>
                        <div><button onClick={() => togglePage(formType)} className='bg-neutral-300'>Sign In</button></div>
                    </div>
                </div>
                
            </form>
        </div>
    )

};

export default CreateAccount;