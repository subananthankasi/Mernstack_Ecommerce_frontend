import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productGetThunk } from '../Redux/Actions/ProductAction'
import { toast } from 'react-toastify'
import Product from './Layouts/Product/Product'
import MetaData from './Layouts/MetaData'
import { Pagination } from 'antd';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productState?.data?.product)
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

    const [current, setCurrent] = useState(1);
    const pageSize = 4;
    const onChange = page => {
        setCurrent(page);
    };
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentProducts = products?.slice(startIndex, endIndex);

    return (
        <>
            <MetaData title={'Buy best product'} />
            <section id="products" className="container mt-5">
                <div className="row">
                    {currentProducts?.map((item) => {
                        return (
                            <Product item={item} key={item._id} col={3}/>
                        )
                    })}
                </div>
            </section>
            <div className="d-flex justify-content-center mt-5" >
                <Pagination
                    current={current}
                    onChange={onChange}
                    total={products?.length}
                    pageSize={pageSize}
                />
            </div>

        </>
    )
}

export default Home