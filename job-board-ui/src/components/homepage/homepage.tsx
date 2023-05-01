import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';
import { useForm, Resolver } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './styles/forms.css';

const DisplayHomePage = () => {


    return (
        
        <div className="container w-full max-w-full my-10">
            <div className="grid grid-cols-2 gap-6">

            <div className = "p-10 bg-dark grid grid-rows-3">
                    <div className="py-3">
                    <h1 className="text-white font-bold"> Real Time Stock Data</h1>
                    </div>
                    <div className="py-5">
                    <h1 className="text-white text-base font-normal"> Here you can search for the price of any stock listed on the nasdaq.</h1>
                    </div>
                    <div className="grid grid-cols-2">
                    <div className="py-4">
                        <Link to = "/create-account">
                        <button className="rounded text-dark bg-white">
                        Create Account
                        </button>
                        </Link>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="py-4">
                        <Link to = "/create-account">
                        <button className="rounded border border-white text-white bg-dark">Sign In</button>

                        </Link>
                        </div>
                        <div className="py-4">
                        <Link to= "/create-account" className="rounded text-white bg-dark">Sign In with Google</Link>
                        </div>
                    </div>


                    </div>
            </div>

            <div className = "grid grid-rows-2 rounded py-5">
            <div className="text-white font-bold text-center text-5xl">Find Your Job</div>       
                <div className="">
                <form className = "grid grid-rows-2">
                    <div className="grid grid-cols-2 ">                        
                    <div className="flex items-start flex-col p-3">
                    <div className="p-2">
                    <label className="font-bold text-lg text-white" htmlFor = "search_bar">Job</label>
                    </div>
                    <div className="w-full">
                    <input name = "search_bar" type = "text" className = "p-3 border rounded shadow-sm text-sm w-full" placeholder="Search Job"/>
                    </div>
                </div>
                <div className="flex flex-center flex-col items-start p-3">
                    <div className="p-2 flex grow">
                    <label className="font-bold text-lg text-white" htmlFor = "search_bar">Location</label>
                    </div>
                    <div className="w-full">
                    <input className="p-3 rounded shadow-sm text-sm w-full" type = "text" placeholder="Enter city, province, or town"/>
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