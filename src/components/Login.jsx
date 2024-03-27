import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true)

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="logo" />
            </div>
            <form className="absolute bg-black  w-1/4 p-12 mt-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && 
                    <input type="text" placeholder="Full Name" className="p-2 my-4 w-full rounded-md bg-slate-600 bg-opacity-50" />
                }
                <input type="text" placeholder="Email or phone number" className="p-2 my-4 w-full rounded-md bg-slate-600 bg-opacity-50" />
                <input type="text" placeholder="Password" className="p-2 my-4 w-full rounded-md bg-slate-600 bg-opacity-50" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-md">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="pt-10">{isSignIn ? "New to Netflix?" : "Already a user?"} <span onClick={toggleSignIn} className="cursor-pointer font-bold">{isSignIn ? "Sign up now." : "Sign in now."}</span></p>
            </form>
        </div>
    )
}

export default Login;