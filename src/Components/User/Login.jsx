import React, { useEffect, useState } from 'react'
import MetaData from '../Layouts/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../Redux/Actions/authAction'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.login)
    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            await dispatch(loginThunk({ email, password })).unwrap()

            toast.success("Successfully logged in", {
                position: "bottom-center",
            })
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
                            <label for="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <a href="#" className="float-right mb-4">Forgot Password?</a>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading}
                        >
                            LOGIN
                        </button>

                        <a href="#" className="float-right mt-3">New User?</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login