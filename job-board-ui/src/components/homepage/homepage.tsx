import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';

const DisplayHomePage = () => {

const [formType, setFormType] = useState('create');

let ReturnFormSection = () => {
    if(formType == 'create') {
        return (
        <CreateAccount />
        )
    } else {
        return (
                <Login />
            )
    }
}


    return (
            <ReturnFormSection/>
        )

}
export default DisplayHomePage;
