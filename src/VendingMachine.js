import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <>
       <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
       <li><Link to="/soda">Soda</Link></li>
       <li><Link to="/chips">Chips</Link></li>
       <li><Link to="/fresh-sardines">Fresh Sardines</Link></li>
    </>
    )
}

export default VendingMachine;