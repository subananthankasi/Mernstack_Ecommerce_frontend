import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const {data}= useSelector((state) => state.authState);
    
    return (
        <>
            <div className="row justify-content-around mt-5 user-info">
                <div className="col-12 col-md-3">
                    <figure className='avatar avatar-profile'>
                        <img className="rounded-circle img-fluid" src={data?.user?.avatar ?? "/images/avatar.png"} alt='avatar' />
                    </figure>
                    <Link to="/myprofile/update" state={{ data: data }} className="btn btn-primary btn-block my-5">
                        Edit Profile
                    </Link>
                </div>

                <div className="col-12 col-md-5">
                    <h4>Full Name</h4>
                    <p>{data?.user?.name}</p>

                    <h4>Email Address</h4>
                    <p>{data?.user?.email}</p>
                    <h4>Joined</h4>
                    <p>{String(data?.user?.createdAt).substring(0, 10)}</p>

                    <a href="#dd" className="btn btn-danger btn-block mt-5">
                        My Orders
                    </a>

                    <Link to="/myprofile/update/password" className="btn btn-primary btn-block mt-3">
                        Change Password
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyProfile