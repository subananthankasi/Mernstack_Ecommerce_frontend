import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPasswordThunk } from '../../Redux/Actions/authAction';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await dispatch(forgotPasswordThunk({ email })).unwrap();
            toast.success("Successfully sent email", {
                position: "bottom-center",
            });
            setEmail('');
        } catch (err) {
            toast.error(err, {
                position: "bottom-center",
            })
            console.log("errr", err)
        }

    }
    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Forgot Password</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Send Email
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword