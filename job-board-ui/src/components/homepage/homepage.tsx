import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';
import { useForm, Resolver } from 'react-hook-form';
import './styles/forms.css';

const DisplayHomePage = () => {


    return (
        
        <div className="container w-full max-w-full my-10">
            <div className="grid grid-cols-2 gap-6">

            <div className = "p-10 bg-white grid grid-rows-3">
                    <div className="py-3">
                    <h1 className="text-dark font-bold">Find a Job. Post A Job</h1>
                    </div>
                    <div className="py-5">
                    <h1 className="text-dark text-base font-normal">Here you can post job listings if you are an employee looking for candidates, or look for jobs if you are a job seeker.</h1>
                    </div>
                    <div className="grid grid-cols-2">
                    <div className="py-4">
                        <button className="rounded text-white bg-dark">Create Account</button>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="py-4">
                        <button className="rounded text-white bg-dark">Sign In</button>
                        </div>
                        <div className="py-4">
                        <button className="rounded text-white bg-dark">Sign In with Google</button>
                        </div>
                    </div>


                    </div>
            </div>

            <div className = "grid grid-rows-2 bg-dark rounded py-5">
            <div className="text-white font-bold text-center text-5xl">Find Your Job</div>       
                <div className="">
                <form className = "grid grid-rows-2">
                    <div className="grid grid-cols-2">                        
                    <div className="flex items-center">
                    <div className="p-2">
                    <label className="font-bold text-lg text-white" htmlFor = "search_bar">Job</label>
                    </div>
                    <div className="flex grow">
                    <input name = "search_bar" type = "text" className = "p-3 border rounded grow shadow-sm text-sm" placeholder="Search Job"/>
                    </div>
                </div>
                <div className="flex flex-center items-center">
                    <div className="p-2">
                    <label className="font-bold text-lg text-white" htmlFor = "search_bar">Location</label>
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