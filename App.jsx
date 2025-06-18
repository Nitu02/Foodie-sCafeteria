import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import Payment from "./Payment";
import { CartProvider } from "./context/CartContext";
import "./App.css";

…      </Router>
    </CartProvider>
  );
}

export default App;
