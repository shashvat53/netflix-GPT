import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const clickHandlerBtn = () => {
    // validation of form data

    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up form authentication

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg)] w-full h-[100vh]">
        <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <div className="">
            <Header />
            <div className="flex justify-center items-center pt-[50%] md:pt-[12%]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-[25px] flex-col w-[400px] p-[40px] bg-[rgba(0,0,0,0.6)]"
              >
                <h1 className="text-3xl text-white font-bold">
                  {isSignInForm ? "Sign In" : "Sign up"}
                </h1>
                {!isSignInForm && (
                  <input
                    ref={name}
                    className="text-[18px] p-[6px_12px] bg-[#333333] text-[#ccc] outline-none rounded-sm"
                    type="text"
                    placeholder="Full Name"
                  />
                )}
                <input
                  ref={email}
                  className="text-[18px] p-[6px_12px] bg-[#333333] text-[#ccc] outline-none rounded-sm"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  ref={password}
                  className="text-[18px] p-[6px_12px] bg-[#333333] text-[#ccc] outline-none rounded-sm"
                  type="password"
                  placeholder="Password"
                />
                <p className="text-xl text-[#E50914]">{errorMessage}</p>
                <button
                  onClick={clickHandlerBtn}
                  className="text-[18px] p-[6px_12px] bg-[#E50914] text-white font-semibold rounded-sm mt-[20px]"
                >
                  {isSignInForm ? "Sign in" : "Sign up"}
                </button>
                <p className="text-[#ccc]">
                  {isSignInForm
                    ? "New to Netflix? "
                    : "Already have an account? "}
                  <span
                    className="text-white hover:underline hover:cursor-pointer"
                    onClick={toggleForm}
                  >
                    {isSignInForm ? "Sign up now" : "Sign in now"}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
