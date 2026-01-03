import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Pagination } from "antd";
import { productGetThunk } from "../../../Redux/Actions/ProductAction";
import MetaData from "../MetaData";
import Product from "./Product";
import { Slider } from "antd";
import { useParams } from "react-router-dom";

const ProductSearch = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productState?.data?.product);
    const [price, setPrice] = useState([1, 1000]);
    const [getCategory, setGetCategory] = useState('')
    const [star, setStar] = useState('')

    const error = useSelector((state) => state.productState?.error?.message);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center",
            });
        }
        dispatch(productGetThunk({ keyword, price, getCategory,star }));
    }, [dispatch, keyword, price, error, getCategory,star]);

    const [current, setCurrent] = useState(1);
    const pageSize = 4;
    const onChange = (page) => {
        setCurrent(page);
    };
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentProducts = products?.slice(startIndex, endIndex);

    const priceOnChange = (price) => {
        setPrice(price);
    };

    const Categories = [
        "Electronics",
        "Mobile phones",
        "Laptops",
        "Food",
        "Cloths/Shoes",
        "Beauty/Health",
        "Accessories",
        "Headphones",
        "Sports",
        "Outdoor",
        "Home",
    ];

    const handleCategory = (item) => {
        setGetCategory(item)
    }
    const handleRating = (item) => {
        setStar(item)
    }
    return (
        <>
            <MetaData title={"Search Products"} />

            <section id="products" className="container mt-5">
                <div className="row">
                    <div className="col-6 col-md-3 mb-5 mt-5">
                        <div className="px-5">
                            <Slider
                                range
                                defaultValue={price}
                                onChange={priceOnChange}
                                min={1}
                                max={1000}
                            />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "11px" }}>₹ {price[0]}</span>
                                <span style={{ fontSize: "11px" }}>₹ {price[1]}</span>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="mt-5">
                            <h3 className="mb-3">Categories</h3>
                            <ul className="pl-0">
                                {Categories.map((item) => (
                                    <li style={{ listStyleType: "none", cursor: "pointer" }} key={item} onClick={() => handleCategory(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr className="my-5" />
                        <div className="mt-5">
                            <h3 className="mb-3">Ratings</h3>
                            <ul className="pl-0">
                                {[5, 4, 3, 2, 1].map((item) => (
                                    <li style={{ listStyleType: "none", cursor: "pointer" }} key={item} onClick={() => handleRating(item)}>
                                        <div className="rating-outer">
                                            <div className="rating-inner" style={{ width: `${item * 20 }%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-9 ">
                        <div className="row">
                            {currentProducts?.map((item) => {
                                return <Product item={item} key={item._id} col={4} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {products?.length > 3 && (
                <div className="d-flex justify-content-center mt-5">
                    <Pagination
                        current={current}
                        onChange={onChange}
                        total={products?.length}
                        pageSize={pageSize}
                    />
                </div>
            )}
        </>
    );
};

export default ProductSearch;
