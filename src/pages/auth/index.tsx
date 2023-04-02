import React from "react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { toast, ToastContainer } from "react-toastify"

import Floater from "../../components/auth/Floater"

import "react-toastify/dist/ReactToastify.css"

function Authentication({ props }: any) {
  const router = useRouter()

  const initialSignupCreds: RegisterForm = {
    email: "",
    password: "",
    name: "",
  }
  const initialSigninCreds: LoginForm = {
    email: "",
    password: "",
  }
  const [signedup, setsignedup] = useState(true)
  const [signupCredentials, setSignupCredentials] = useState(initialSignupCreds)
  const [signinCredentials, setSigninCredentials] = useState(initialSigninCreds)
  return (
    <center>
      <div className={"m-auto mt-36 w-[1000px] rounded-3xl bg-slate-50 shadow-2xl"}>
        <div
          className={" m-auto flex h-[600px] flex-grow divide-x-2 rounded-3xl p-20 transition-all "}
        >
          {/* Signup */}
          <div
            className={` flex flex-grow flex-col items-center justify-center p-10 transition-all ${
              signedup && "hidden"
            }`}
          >
            <h1 className="pb-10 text-3xl font-semibold">Sign up for the Website</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                fetch("/api/auth/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(signupCredentials),
                }).then((response) =>
                  response.text().then((e) => {
                    router.push("/dashboard")
                  })
                )
              }}
              className="flex flex-col justify-center"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                id=""
                className="my-4 appearance-none rounded-md px-5 py-3"
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    [e.target.name]: e.target.value,
                  })
                }}
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                id=""
                className="my-4 appearance-none rounded-md px-5 py-3"
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    [e.target.name]: e.target.value,
                  })
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                id=""
                className="my-4 appearance-none rounded-md px-5 py-3"
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    [e.target.name]: e.target.value,
                  })
                }}
              />
              <button
                className="shadow-cool mt-5 w-full rounded-3xl bg-blue-600 p-3 text-white hover:bg-blue-500"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          <Floater
            heading={`${signedup ? "Sign In" : "Sign Up"}`}
            subheading={`${
              signedup
                ? "Enter your details to enter the platform."
                : "Enter your personal details to start your journey with us."
            }`}
            buttonText={`${signedup ? "Sign Up" : "Sign In"}`}
            buttonClick={() => {
              setsignedup(!signedup)
            }}
          />
          {/* Login */}
          <div
            className={`flex flex-grow flex-col items-center justify-center p-10 transition-all ${
              !signedup && "hidden"
            }`}
          >
            <h1 className="pb-10 text-center text-3xl font-semibold ">{"Sign in to Website"}</h1>
            <p className="pb-2 text-sm font-thin text-gray-600">use email account</p>
            <form
              method="POST"
              action="/auth/login"
              className="flex w-full flex-col justify-center"
              onSubmit={(e) => {
                e.preventDefault()
                fetch("/api/auth/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(signinCredentials),
                }).then((response) =>
                  response.text().then((e) => {
                    router.push("/dashboard")
                  })
                )
              }}
            >
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                id=""
                className="mx-auto my-4 w-[80%] appearance-none rounded-md px-5 py-3"
                onChange={(e) => {
                  setSigninCredentials({
                    ...signinCredentials,
                    [e.target.name]: e.target.value,
                  })
                }}
              />
              {
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  id=""
                  className="mx-auto my-4 w-[80%] appearance-none rounded-md px-5 py-3"
                  onChange={(e) => {
                    setSigninCredentials({
                      ...signinCredentials,
                      [e.target.name]: e.target.value,
                    })
                  }}
                />
              }
              <p className="cursor-pointer pb-2 text-sm text-black underline">Forgot Password</p>
              {
                <button
                  className="shadow-cool mt-5 w-full rounded-3xl bg-blue-600 p-3 text-white hover:bg-blue-500"
                  type="submit"
                >
                  Sign In
                </button>
              }
            </form>
          </div>
        </div>
      </div>
    </center>
  )
}

export default Authentication
