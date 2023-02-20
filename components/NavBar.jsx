import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <Image
            src="/logo-no-background.png"
            width="200"
            height="40"
            alt="logo"
          />
        </Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
