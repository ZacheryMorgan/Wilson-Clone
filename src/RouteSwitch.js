import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Header/Nav";
import Header from "./components/Header/Header";
import SignUpFooter from "./components/Footer/SignUpFooter";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ShopItem from "./components/Shop/ShopItem";
import Data from "./Data";
import Cart from "./components/Cart/Cart";
import ScrollToTop from "./components/Scroll";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const addItem = (item, amount) => {
    const currentItem = Data.find((product) => product.id === item.id);
    if (cart.indexOf(currentItem) > -1) {
      setCart((prev) => {
        const newCart = prev.slice();
        newCart[cart.indexOf(currentItem)].quantity += amount;
        prev = newCart;
        return prev;
      });
    } else {
      item.quantity = amount;
      setCart((prev) => [...prev, item]);
    }
  };

  const editQuantity = (e, item) => {
    const amount = e.target.valueAsNumber;

    if (amount === 0) {
      setCart((prev) => {
        const product = prev.find((product) => product.id === item.id);
        const copy = prev.slice();
        copy.splice(prev.indexOf(product), 1);
        prev = copy;
        return prev;
      });
    }

    setCart((prev) => {
      return prev.map((product) => {
        return product.id === item.id
          ? { ...product, quantity: amount }
          : product;
      });
    });

    console.log(cart);
  };

  return (
    <Router>
      <ScrollToTop />
      <Cart
        cart={cart}
        show={showCart}
        toggle={toggleCart}
        editQuantity={editQuantity}
      />
      <Header />
      <Nav onClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop data={Data} />} />
        <Route
          path="/shop/:id"
          element={<ShopItem data={Data} onClick={addItem} cart={cart} />}
        />
      </Routes>
      <SignUpFooter />
      <Footer />
    </Router>
  );
};

export default RouteSwitch;
