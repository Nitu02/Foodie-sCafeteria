import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import "./App.css";

const menuItems = [
  {
    name: "Chole Bhature",
    image: "https://indianflavorscuisine.com/wp-content/uploads/2024/10/chole-bhature.jpg",
    ingredients: "Chickpeas, flour, spices",
    price: "₹80"
  },
  {
    name: "Paneer Roll",
    image: "https://ministryofcurry.com/wp-content/uploads/2019/10/kathi-roll_.jpg",
    ingredients: "Paneer, roll, sauces",
    price: "₹70"
  },
  {
    name: "Classic Veg Thali",
    image: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
    ingredients: "Rice, roti, sabzi, dal, salad",
    price: "₹120"
  },
  {
    name: "Masala Dosa",
    image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
    ingredients: "Dosa, potato filling, chutney",
    price: "₹90"
  },
  {
    name: "Margherita Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s",
    ingredients: "Cheese, tomato, basil",
    price: "₹150"
  },
  {
    name: "Farmhouse Pizza",
    image: "https://grub24s3.s3.eu-west-2.amazonaws.com/upload/1702561436-Pizza.jpg",
    ingredients: "Veggies, cheese, sauce",
    price: "₹180"
  },
  {
    name: "Peppy Paneer Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerzD72Svqjncyu0hUB0AZD4LHjVeC0mV4FQ&s",
    ingredients: "Paneer, capsicum, sauce",
    price: "₹200"
  },
  {
    name: "Deluxe Veggie Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmveBd1C3_MaLaVGFF3W-GhPxlRmv4SWinQ&s",
    ingredients: "Veg mix, olives, cheese",
    price: "₹190"
  },
  {
    name: "Mexican Green Wave",
    image: "https://cdn.dotpe.in/longtail/item_thumbnails/6385438/2eG3xJ7K.webp",
    ingredients: "Mexican herbs, jalapenos",
    price: "₹210"
  },
  {
    name: "Veg Extravaganza Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0_bmNvUvNB-5bXt5RAfXCUdUekgvnsw3Xg&s",
    ingredients: "Veggies, cheese overload",
    price: "₹230"
  },
];

function Menu() {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [selected, setSelected] = useState({});

  const isItemAdded = (itemName) => {
    return cart.some(item => item.name === itemName);
  };

  return (
    <div className="menu-page">
      <header className="navbar">
        <h1>Our Menu</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>

      <main>
        <div className="menu-grid">
          {menuItems.map((item, idx) => (
            <div className="menu-item" key={idx}>
              <img src={item.image} alt={item.name} />
              <div className="menu-item-details">
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
                <p>{item.price}</p>
                {isItemAdded(item.name) ? (
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>Qty: {cart.find(i => i.name === item.name)?.quantity || 1}</span>
                    <button className="quantity-button" onClick={() => increaseQuantity(item.name)}>+</button>
                  </div>
                ) : (
                  <button className="order-button" onClick={() => addToCart({ ...item, quantity: 1 })}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Menu;
