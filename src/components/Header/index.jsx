import React, { useEffect } from "react";
import { Logo } from "../../assets/img";
import { Link, useParams, useSearchParams } from "react-router-dom";

function Header({ activeLink }) {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const section = searchParams.get("section");
    console.log(section);
    if (section) {
      switch (section) {
        case "contact":
          const s = document.getElementById("contact");
          //s.scrollIntoView();
          window.scrollTo(0, document.body.scrollHeight);
          break;
      }
    }
  }, [searchParams]);

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
              <a href={`/?section=contact`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
