import React, {useState} from "react";


const Login = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    }

return (
    <div className = "container">
        <div className="grid">

        </div>
    <h1 className = "">login</h1>
        <form className = ''>
            <div className = 'grid grid-rows-16'>
                <div className='border'>
                <input type = "text" name = "username" placeholder='username' />
                </div>
                <div className=''>
                <input type = "password" name = "user_password" placeholder='password' />
                </div>
                <div className=''>
                <input type = "password" name = "confirm_password" placeholder='confirm password' />
                </div>
            </div>
        </form>
    </div>
)

};

export default Login;