import React from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

function Home() {
  return (
    <div className="home-page" style={{
      background: `url("https://images.unsplash.com/photo-1600891964599-f61ba0e24092") no-repeat center center`,
      backgroundSize: "cover"
    }}>
      <header className="navbar">
        <h1>🍽️ Foodie's Cafeteria</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <DarkModeToggle />
        </nav>
      </header>

      <main>
        <div className="content-box">
          <h2>Welcome!</h2>
          <p>We serve delicious meals made with love. Explore the menu and order your favorite dish!</p>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Foodie's Cafeteria</p>
      </footer>
    </div>
  );
}

export default Home;
