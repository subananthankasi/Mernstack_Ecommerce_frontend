import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk, registerThunk } from "../../Redux/Actions/authAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.register)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: null,
    });
    const [avatarPreview, setAvatarPreview] = useState("/images/avatar.png");
    const [avatar, setAvatar] = useState(null);

    const onChangeHandler = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(e.target.files[0])
                }
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("email", userData.email);
        formData.append("password", userData.password);
        formData.append("avatar", avatar);

        try {
            await dispatch(registerThunk(formData)).unwrap();
            toast.success("Successfully registered", {
                position: "bottom-center",
            });
            dispatch(getProfileThunk())
            navigate("/");
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
                <form className="shadow-lg" onSubmit={submitHandler} encType="multipart/form-data">
                    <h1 className="mb-3">Register</h1>

                    <div className="form-group">
                        <label htmlFor="email_field">Name</label>
                        <input
                            type="name"
                            name="name"
                            id="name_field"
                            className="form-control"

                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email_field"
                            className="form-control"

                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password_field"
                            className="form-control"

                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="avatar_upload">Avatar</label>
                        <div className="d-flex align-items-center">
                            <div>
                                <figure className="avatar mr-3 item-rtl">
                                    <img
                                        src={avatarPreview}
                                        className="rounded-circle"
                                        alt="avatar"
                                    />
                                </figure>
                            </div>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    name="avatar"
                                    className="custom-file-input"
                                    id="customFile"
                                    onChange={onChangeHandler}
                                />
                                <label className="custom-file-label" htmlFor="customFile">
                                    Choose Avatar
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        className="btn btn-block py-3"
                        disabled={loading}
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
