import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Payment() {
  const navigate = useNavigate();
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setPaid(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="menu-page">
      <header className="navbar">
        <h1>Payment Page</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>

      <main>
        <div className="content-box">
          {paid ? (
            <h2 className="thankyou">Thank you for your order! 🍽️ Redirecting...</h2>
          ) : (
            <>
              <h3>Please confirm your payment to complete your order.</h3>
              <button className="order-button" onClick={handlePayment}>Confirm Payment</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Payment;
