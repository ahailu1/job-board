import React, {useState} from 'react';
import './styles/create-account.css';
const CreateAccount = () => {

    

    return (
        <div className = "container p-5">
            <div className = 'py-5'>
            <h1 className = "text-black">Create your Account</h1>
            </div>
            <form className = ''>
                <div className = 'grid grid-rows-16 gap-4'>
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
                        <div><button className='bg-neutral-300'>Sign In</button></div>
                    </div>
                </div>
                
            </form>
        </div>
    )

};

export default CreateAccount;