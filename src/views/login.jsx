import { useRef, useState, useEffect, useContext } from "react";
import Logo from "../imgs/Logos/Logo-Ext2.png";
/* import AuthContext from "../context/AuthProvider"; */
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

import axios from "../api/axios";
import Users from "../components/Users";

import useRefreshToken from "../hooks/useRefreshToken";

const LOGIN_URL = "/auth";


function Login() {

  const navigate = useNavigate();
  /* const { setAuth } = useContext(AuthContext); */
  /* const { setAuth } = useAuth();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
          setSuccess(true);
          navigate(from, { replace: true });
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  } */


  return (
    <>
     {/* {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <Users/>
          <p>
            <a href="w">Go to Home</a>
          </p>
          <button onClick={()=>refresh()}>Refresh</button> 
        </section>
      ) : (  */}
        <section class="h-screen md:flex">
          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-500 to-red-600 i justify-around items-center hidden">
            <div className="mx-10">
              <h1 class="text-white font-bold text-4xl font-sans">
                Conoce sobre Nosotros
              </h1>
              <p class="text-white mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda fuga laboriosam qui amet hic repellat, esse obcaecati
                animi ratione quae saepe minus quo voluptatum voluptates tempore
                voluptatem, consectetur a quam!
              </p>
              <button
                type="submit"
                class="block w-28 border-2 text-white hover:text-red-500 hover:bg-white  mt-4 py-2 rounded-2xl font-bold mb-2"
              >
                Read More
              </button>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          <div class="flex md:w-1/2 h-screen justify-center py-10 items-center bg-white">
            <form class="bg-white align-center">
              <div className="flex mb-14 justify-center">
                <img className="h-8" src={Logo} alt="Promart" />
              </div>
              <a
                href="/productos"
                class="flex items-center justify-center mt-4 mb-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div class="px-4 py-3">
                  <svg class="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                  Inicia con Google
                </h1>
              </a>
              <div class="mt-4 mb-4 flex items-center justify-between hover:text-red-500">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <a href="" class="text-xs text-center text-gray-500">
                  O ingresa tu correo
                </a>
                <span class="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  class="pl-2 outline-none border-none"
                  type="email"
                  name=""
                  placeholder="Correo Electrónico"
                  id="email"
                  // ref={userRef}
                  // autoComplete="off"
                  // onChange={(e) => setUser(e.target.value)}
                  // value={user}
                  // required
                />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  class="pl-2 outline-none border-none"
                  type="password"
                  name=""
                  placeholder="Contraseña"
                  id="password"
                  // onChange={(e) => setPwd(e.target.value)}
                  // value={pwd}
                  // required
                />
              </div>
              {/* <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p> */}
              <button
                type="submit"
                class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                onClick={() => navigate(`/productos`)}
              >
                Inicia Sesión
              </button>
              <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                ¿Olvidaste tu contraseña?
              </span>
              <div class="mt-4 flex items-center justify-between hover:text-red-500">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <a href="/registro" class="text-xs text-gray-500">
                  O Registrate
                </a>
                <span class="border-b w-1/5 md:w-1/4"></span>
              </div>
            </form>
          </div>
        </section>
      {/* )} */}
    </>
  );
}

export default Login;
