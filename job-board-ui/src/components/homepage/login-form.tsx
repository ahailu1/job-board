import React, {useState} from "react";
import type { CreateAccountProps } from './create-account-interface';


const Login : React.FC<React.PropsWithChildren<CreateAccountProps>> = ({togglePage, formType} : CreateAccountProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    }

return (
    <div className = "grid grid-rows-1">
        <div className="col-span-1 bg-black">
        <h1 className = "">login</h1>
        </div>
        <form className = '' method = 'post'>
            <div className = ''>
                <div className='border'>
                <input type = "text" name = "username" placeholder='username' />
                </div>
                <div className=''>
                <input type = "password" name = "user_password" placeholder='password' />
                </div>
                <div className=''>
                <input type = "password" name = "confirm_password" placeholder='confirm password' />
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

export default Login;