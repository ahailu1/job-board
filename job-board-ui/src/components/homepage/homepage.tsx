import React, {useState} from "react";
import Login from './login-form';
import CreateAccount from './create-account';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import './styles/forms.css';
import axios from "axios";

const DisplayHomePage = () => {

    type searchBarInput = {
        searchInput : string;
    }

    const formInputs = yup.object().shape({
    searchInput : yup.string().min(1).required()
    });

    const { register, handleSubmit, formState : { errors } } = useForm<searchBarInput> ({resolver : yupResolver(formInputs)})

        const onSubmit : SubmitHandler<searchBarInput> = async (data) => {
            
            const {searchInput} = data;
            try {
                let getStockInfo = await axios.get(`http://localhost:3000/fetch-stock?id=${searchInput}`);
                
            console.log('alex story');

                console.log(getStockInfo);
            } catch (e) {
                throw new Error(e);
            }

        }

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
                <form className = "grid grid-rows-2" name='request_stock_form' onSubmit = { handleSubmit(onSubmit) }>
                    <div className="grid grid-cols-2 ">                        
                    <div className="flex items-start flex-col p-3">
                    <div className="p-2">
                    <label className="font-bold text-lg text-white" htmlFor = "search_bar">Job</label>
                    </div>
                    <div className="w-full">
                    <input {...register("searchInput")} type = "text" className = "p-3 border rounded shadow-sm text-sm w-full" placeholder="Search Job"/>
                    </div>
                </div>
                    <button type = "submit">Search</button>
                    </div>        
                </form>
                </div>
            </div>
            </div>     
            </div>

        )

}
export default DisplayHomePage;