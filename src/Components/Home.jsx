import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productGetThunk } from '../Redux/Actions/ProductAction'
import { toast } from 'react-toastify'
import Product from './Layouts/Product/Product'
import MetaData from './Layouts/MetaData'
import { Pagination } from 'antd';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productState?.data?.product)
    const totalProductCount = useSelector((state) => state.productState?.data?.length)
    const resPerPage = useSelector((state) => state.productState?.data?.resPerPage)


    const error = useSelector((state) => state.productState?.error?.message)
    useEffect(() => {
        dispatch(productGetThunk())
    }, [dispatch])

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center",
            });
        }
    }, [error, dispatch])

    const handlePage = (page) => {
        setCurrentPage(page)
        console.log("page")
    }
    return (
        <>
            <MetaData title={'Buy best product'} />
            <section id="products" className="container mt-5">
                <div className="row">
                    {products?.map((item) => {
                        return (
                            <Product item={item} key={item._id} />
                        )
                    })}
                </div>
            </section>
            <div className="d-flex justify-content-center" >
                <Pagination
                    current={currentPage}
                    pageSize={resPerPage}
                    total={totalProductCount}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                />
            </div>

        </>
    )
}

export default Home