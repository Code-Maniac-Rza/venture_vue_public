import { collection,getDocs } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebase_init";
import logo from "./assets/letter-v.png"
import { Input, initTWE } from "tw-elements";
import loginImg from "../src/assets/login_img.svg"
initTWE({ Input }, { allowReinits: true });


export const Login = ()=>{

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLogIn,setIsLogIn] = useState(false);

    const changeEmail = (event)=>{
        setEmail(event.target.value)
    }
    
    const changePassword = (event)=>{
        setPassword(event.target.value)
    }

    const verifyDetails = async ()=>{

        let flag = false;
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            if(doc.data().Email===email && doc.data().Password===password){
                flag = true;
            }
        })

        if(flag){
            setIsLogIn(true)
            navigate('/', {state:{logInFlag:true,isLogIn}} )
        }
        else{
            alert('Wrong Credentials are entered!!')
        }
    }

    return(
        <>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8 animate-pulse" alt="VentureVue" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">VentureVue</span>
  </a>
  </div>
</nav>
            <section class="h-screen bg-gray-900">
            <div class="container h-full px-6 py-24">
                <div
                class="flex h-full flex-wrap items-center justify-center lg:justify-evenly">
                {/* <!-- Left column container with background--> */}
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img className=" w-[450px]"
                    src={loginImg}
                    alt="Phone" />
                </div>

                {/* <!-- Right column container with form --> */}
                <div class="md:w-8/12 lg:ms-6 lg:w-5/12">
                    <form>
                    {/* <!-- Email input --> */}
                    <div class="relative mb-6" data-twe-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput3"
                        placeholder="Email address" 
                        value={email}
                        onChange={changeEmail}
                        style={{color:'black'}}
                        />
                        <label
                        for="exampleFormControlInput3"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >Email address
                        </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="relative mb-6" data-twe-input-wrapper-init>
                        <input
                        type="password"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput33"
                        placeholder="Password" 
                        value={password}
                        onChange={changePassword}
                        style={{color:'black'}}
                        />
                        <label
                        for="exampleFormControlInput33"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >Password
                        </label>
                    </div>

                    {/* <!-- Remember me checkbox --> */}
                    <div class="mb-6 flex items-center justify-between">
                        <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                        <input
                            class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                            type="checkbox"
                            value=""
                            id="exampleCheck3"
                            checked />
                        <label style={{color:'white'}}
                            class="inline-block ps-[0.15rem] hover:cursor-pointer"
                            for="exampleCheck3">
                            Remember me
                        </label>
                        </div>

                        {/* <!-- Forgot password link --> */}
                        <Link
                        to='/SignUp'
                        class="text-primary focus:outline-none dark:text-primary-400 text-white"
                        >Register</Link>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                        type="button"
                        class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        onClick={verifyDetails}
                        style={{color:'white',border:'2px solid white'}}
                        >
                        Sign in
                    </button>

                    {/* <!-- Divider --> */}
                    <div
                        class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                        <p
                        class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                        </p>
                    </div>

                    {/* <!-- Social login buttons --> */}
                    <a
                        class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        style={{backgroundColor: '#3b5998'}}
                        href="#!"
                        role="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        {/* <!-- Facebook --> */}
                        <span
                        class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                        </span>
                        Continue with Facebook
                    </a>
                    <a
                        class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        style={{backgroundColor: '#55acee'}}
                        href="#!"
                        role="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        {/* <!-- X --> */}
                        <span class="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                        </span>
                        Continue with X
                    </a>
                    </form>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}