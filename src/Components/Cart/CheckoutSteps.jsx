import React from 'react'

const CheckoutSteps = () => {
  return (
     <div className="checkout-progress d-flex justify-content-center mt-5">
        <div className="triangle2-completed"></div>
        <div className="step complete">Shipping Info</div>
        <div className="triangle-completed"></div>

        <div className="triangle2-active"></div>
        <div className="step active">Payment</div>
        <div className="triangle-active"></div>

        <div className="triangle2-incomplete"></div>
        <div className="step incomplete">Confirm Order</div>
        <div className="triangle-incomplete"></div>
      </div>
  )
}

export default CheckoutSteps