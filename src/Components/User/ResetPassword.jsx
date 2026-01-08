import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { resetPasswordThunk } from '../../Redux/Actions/authAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(resetPasswordThunk({ token, password, confirmPassword })).unwrap();
            toast.success("Password reset successfully", {
                position: "bottom-center",
            });
            navigate('/')
        } catch (err) {
            toast.error(err, {
                position: "bottom-center",
            })
        }

    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={handleSubmit}>
                    <h1 className="mb-3">New Password</h1>

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

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Set Password
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ResetPassword