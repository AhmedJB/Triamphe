import React from "react";
import { Logo } from "../../assets/img";
import { Link } from "react-router-dom";

function Header({ activeLink }) {
  return (
    <>
      <div className={`w-full`}>
        <nav className={`container mx-auto flex justify-between px-4`}>
          <img src={Logo} alt={`logo`} className={`w-[100px]`} />
          <ul className={`flex items-center list-none gap-8`}>
            <li
              className={`font-bold  cursor-pointer ${
                activeLink === "accueil"
                  ? " text-[1.3rem] text-goldenLight"
                  : ""
              } hover:text-goldenLight`}
            >
              <Link to={`/`}>Accueil</Link>
            </li>
            <li
              className={`font-semibold cursor-pointer ${
                activeLink === "products"
                  ? " text-[1.3rem] text-goldenLight"
                  : ""
              } hover:text-goldenLight`}
            >
              <Link to={`/products`}>Produits</Link>
            </li>
            <li
              className={`font-semibold cursor-pointer hover:text-goldenLight hidden sm:block`}
            >
              <a href={`/#contact`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
