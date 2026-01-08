import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Layouts/Loader';

const ProtectRoute = ({ children }) => {
    const { isAuthenticate, loading } = useSelector((state) => state.authState);
    console.log("load", loading)
    if (!isAuthenticate && !loading) {
        return <Navigate to='/login' />
    }
    if (isAuthenticate) {
        return children

    }
    if (loading) {
        return <Loader />
    }

}

export default ProtectRoute