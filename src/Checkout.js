import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"
                src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/24308aad93dc90f56cd3329e12a00377.w3000.h600._CR0%2C0%2C3000%2C600_SX1280_.jpg">
            </img>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Amazon Cart is empty</h2>
                    <p>You have no items in your cart. To buy one or more items, click "ADD TO BASKET" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping cart</h2>
                    {/* list out all of the checkout product  */}
                    {basket?.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )
                    )}
                </div>
            )}
            </div>
            {basket.length >0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
