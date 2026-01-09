import React, { useEffect, useState } from 'react'
import MetaData from '../Layouts/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk, loginThunk } from '../../Redux/Actions/authAction'
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { loading  } = useSelector((state) => state.login) 
    const { isAuthenticate } = useSelector((state) => state.authState);

    const redirect = location.search ? location.search.split('=')[1] : '/'
useEffect(() => {
  if (isAuthenticate) {
    navigate(redirect === "shipping" ? "/shipping" : "/");
  }
}, [isAuthenticate, redirect, navigate]);
    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            await dispatch(loginThunk({ email, password })).unwrap()

            toast.success("Successfully logged in", {
                position: "bottom-center",
            })
            dispatch(getProfileThunk())
            navigate(redirect)

        } catch (err) {
            toast.error(err, {
                position: "bottom-center",
            })
        }
    }

    return (
        <>
            <MetaData title="Login" />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={loginHandler}>
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Link to="/password/reset" className="float-right mb-4">Forgot Password?</Link>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading}
                        >
                            LOGIN
                        </button>

                        <Link to="/register" className="float-right mt-3">New User?</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login