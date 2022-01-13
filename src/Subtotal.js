import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getbasketTotal } from './reducer';

function Subtotal() {
    const [{ basket },dispatch] = useStateValue();
    return (
        <div className="subtotal">
           
            {/* price  */}
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains a gift 
                </small>
                </>
            )}
            decimalScale={2}
            value={getbasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"₹"}
           />
            <button className="subtotal__button">Proceed to Buy</button>

        </div>
    )
}

export default Subtotal
