import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from "../../Redux/Slice/CartSlice";
import { toast } from "react-toastify";

const Cart = () => {
    const navigate = useNavigate();
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping')
    }
    return (
        <>
            {items?.length === 0 ? (
                <h2 className="mt-5">Your Cart is empty</h2>
            ) : (
                <>
                    <h2 className="mt-5">
                        Your Cart: <b>{items?.length} items</b>
                    </h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {items &&
                                items.map((item) => (
                                    <>
                                        <hr />
                                        <div className="cart-item">
                                            <div className="row">
                                                <div className="col-4 col-lg-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        height="90"
                                                        width="115"
                                                    />
                                                </div>

                                                <div className="col-5 col-lg-3">
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>

                                                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                    <p id="card_item_price">${item.price}</p>
                                                </div>

                                                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                    <div className="stockCounter d-inline">
                                                        <span
                                                            className="btn btn-danger minus"
                                                            onClick={() =>
                                                                dispatch(decreaseQuantity(item.id || item._id))
                                                            }
                                                        >
                                                            -
                                                        </span>
                                                        <input
                                                            type="number"
                                                            className="form-control count d-inline"
                                                            value={item.quantity}
                                                            readOnly
                                                        />

                                                        <span
                                                            className="btn btn-primary plus"
                                                            onClick={() =>
                                                                dispatch(increaseQuantity(item.id || item._id))
                                                            }
                                                        >
                                                            +
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                    <i
                                                        id="delete_cart_item"
                                                        className="fa-solid fa-trash btn btn-danger"
                                                        onClick={() => {
                                                            dispatch(removeFromCart(item.id || item._id));
                                                            toast.success("Item Removed From Cart", {
                                                                position: "bottom-center",
                                                            });
                                                        }}
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            <hr />
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>
                                    Subtotal:{" "}
                                    <span className="order-summary-values">
                                        {items.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                                        (Units)
                                    </span>
                                </p>
                                <p>
                                    Est. total:{" "}
                                    <span className="order-summary-values">
                                        $
                                        {items.reduce(
                                            (acc, item) => acc + item.quantity * item.price,
                                            0
                                        )}
                                    </span>
                                </p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={() => checkoutHandler()}>
                                    Check out
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
