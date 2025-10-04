import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";

export default function SignUp() {
    const naviget = useNavigate();

    const [inputError, setInputError] = useState({
        emailError: "", pwdError: ""
    });
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const buttonRef = useRef(null);

    const handleSubmit = () => {

        setInputError({
            emailError: "", pwdError: ""
        });
        setError("");
        setMsg("");

        const formData = new FormData();
        const admin = emailRef.current.value;
        const pwd   = pwdRef.current.value;

        if (admin.length === 0) {
            setInputError(prevState => ({
                    ...prevState,
                    emailError: "Email Required"
            }))
        }else {
            formData.append("admin", admin);
        }

        if (pwd.length === 0) {
            setInputError(prevState => ({
                ...prevState,
                pwdError: "Password Required"
            }))
        }else {
            formData.append("pwd", pwd);
        }

        if (admin !== "" && pwd !== "") {
            var url = "http://localhost/portfolio/login.php";

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then((response) => response.json())
            .then((response) => {
                if (response[0].error === "") {
                    setMsg(response[0].result);
                    setTimeout(() => {
                        naviget("/admin");
                    }, 2000);
                }else {
                    setError(response[0].error);
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="public/me.jpg"
                     alt="personel image" className="mx-auto h-50 w-auto rounded-full"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">Sign in</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                <div className='text-green-500 m-0 p-0 font-semibold text-center text-sm italic'>{msg}</div>
                <div className='text-red-500 m-0 p-0 font-semibold text-center text-sm italic'>{error}</div>
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium">Email
                        address</label>
                    <div className="mt-2">
                        <input ref={emailRef}
                               id="email" type="email" name="email"
                               required autoComplete="email"
                               className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-950 sm:text-sm/6"/>
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.emailError}</div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password"
                               className="block text-sm/6 font-medium">Password</label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold hover:text-blue-950 text-gray-400">Forgot
                                password?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input ref={pwdRef}
                               id="password" type="password" name="password" required
                               autoComplete="current-password"
                               className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-950 sm:text-sm/6"/>
                        <div className='text-red-500 m-0 p-0 font-semibold text-sm italic'>{inputError.pwdError}</div>
                    </div>
                </div>

                <div>
                    <button
                        ref={buttonRef}
                        onClick={() => handleSubmit()}
                        type="submit"
                        className="flex w-full justify-center rounded-md text-blue-950 bg-yellow-200 px-3 py-1.5 text-sm/6 font-semibold hover:shadow-[0px_0px_5px_#474306] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 cursor-pointer">
                        Sign in
                    </button>
                </div>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not an Admin?
                    <Link to='/guest' className="font-semibold text-lime-900 hover:text-lime-800 ml-1" >Portfolio</Link>
                </p>
            </div>
        </div>
    )
}