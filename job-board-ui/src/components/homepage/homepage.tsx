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
        
        <div className="flex container grid-row-1">
            <ReturnFormSection/>
            <div className = "container grid-row-5 border bg-black">
                <div>Hello World</div>
                <div></div>
                <div></div>

            </div>
            </div>

        )

}
export default DisplayHomePage;
