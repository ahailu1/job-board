import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';

const DisplayHomePage = () => {

const [formType, setFormType] = useState('create');

const setCreateAccountPage = (type : string) : void => {
    if(type == 'create') {
        setFormType('login');
    } else {

        setFormType('create');
    }
}


let ReturnFormSection = () => {
    if(formType == 'create') {
        return (
        <CreateAccount formType = {formType} togglePage = {setCreateAccountPage} />
        )
    } else {
        return (
                <Login togglePage = {setCreateAccountPage} formType = {formType} />
            )
    }
}



    return (
        
        <div className="container m-0 p-5 my-2 flex justify-center">
            <div className="bg-dark rounded grid grid-row-1 grid-cols-2">
          
            <div className = "p-4">
            <ReturnFormSection/>
            </div>

            <div className = "grid grid-cols-1 border bg-black">
                <div>Hello World</div>
            </div>



            </div>
          
            
         
            </div>

        )

}
export default DisplayHomePage;