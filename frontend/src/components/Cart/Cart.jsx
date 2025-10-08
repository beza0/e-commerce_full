import React from 'react'
import CartCoupon from './CartCoupon'
import CartTotals from './CartTotals'
import CartProgess from './CartProgess'
import CartTable from './CartTable'
import "./Cart.css"

const Cart = () => {
  return (
    <>
       <section className="cart-page">
        <div className="container">
            <div className="cart-page-wrapper">
                <form className="cart-form">
                   <CartProgess />
                    <div className="shop-table-wrapper">
                     <CartTable />
                      <CartCoupon />
                    </div>
                </form>
                <div className="cart-collaterals">
                   <CartTotals />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart
