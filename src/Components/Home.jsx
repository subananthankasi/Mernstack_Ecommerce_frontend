import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productGetThunk } from '../Redux/Actions/ProductAction'
import { toast } from 'react-toastify'
import Product from './Layouts/Product/Product'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productState?.data?.product)
    const error = useSelector((state) => state.productState?.error?.message)
    useEffect(() => {
        dispatch(productGetThunk())
    }, [])
    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center",
            });
        }
    }, [error])


    return (
        <>
            <section id="products" className="container mt-5">
                <div className="row">
                    {products?.map((item) => {
                        return (
                            <Product item ={item} key={item._id}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home