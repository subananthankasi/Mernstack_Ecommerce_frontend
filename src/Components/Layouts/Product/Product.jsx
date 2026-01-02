import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ item }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={item._id}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={item.images[0].image}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <a href="">{item.name}</a>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${item.ratings / 5 * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">{item.numOfReviews} Reviews </span>
                    </div>
                    <p className="card-text">${item.price} </p>
                    {/* <a href="#" id="view_btn" className="btn btn-block">View Details</a> */}
                    <Link to={`/product/${item._id}`} id="view_btn" className="btn btn-block" >View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Product