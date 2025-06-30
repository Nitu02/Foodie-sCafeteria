
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Cart() {
  const { cart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    if (!name || !table || !paymentMethod) {
      alert("Please fill all details including payment method!");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart();
    setName("");
    setTable("");
    setPaymentMethod("");

    navigate("/payment");
  };

  return (
    <div className="menu-page">
      <header className="navbar">
        <h1>Your Cart</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>

      <main>
        <div className="content-box">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div className="menu-item" key={idx}>
                  <img src={item.image} alt={item.name} />
                  <div className="menu-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <div className="quantity-controls">
                      <button className="quantity-button" onClick={() => decreaseQuantity(item.name)}>-</button>
                      <span>Qty: {item.quantity}</span>
                      <button className="quantity-button" onClick={() => increaseQuantity(item.name)}>+</button>
                    </div>
                  </div>
                </div>
              ))}

              <h3>Total: ₹{total}</h3>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Table Number"
                value={table}
                onChange={(e) => setTable(e.target.value)}
              />
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Select Payment Method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="cod">Cash on Delivery</option>
              </select>

              <button className="order-button" onClick={handleCheckout}>
                Confirm Order
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Cart;
