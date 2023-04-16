import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';
import { useForm, Resolver } from 'react-hook-form';
import './styles/forms.css';

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
        
        <div className="container w-full max-w-full my-10">
            <div className="grid grid-cols-2 gap-6">
          
            <div className = "p-4 bg-dark rounded-r">
            <ReturnFormSection/>
            </div>

            <div className = "grid grid-row-3">
            <div>Hello World</div>       
                <div className="">
                <form className = "grid grid-row-2">
                    <div className="grid grid-cols-2">                        
                    <div className="flex items-center">
                    <div className="p-2">
                    <label className="font-bold text-lg" htmlFor = "search_bar">Job</label>
                    </div>
                    <div className="flex grow">
                    <input name = "search_bar" type = "text" className = "p-3 border rounded grow shadow-sm text-sm" placeholder="Search Job"/>
                    </div>
                </div>
                <div className="flex flex-center items-center">
                    <div className="p-2">
                    <label className="font-bold text-lg" htmlFor = "search_bar">Location</label>
                    </div>
                    <div className="flex grow">
                    <input className="p-3 border rounded shadow-sm text-sm grow" type = "text" placeholder="Enter city, province, or town"/>
                    </div>
                </div>
                    </div>           
                </form>
                </div>
            </div>
            </div>     
            </div>

        )

}
export default DisplayHomePage;