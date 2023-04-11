import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";

import "../Flow 1.css";
import { Link } from "react-router-dom";
import search from "../agroonline/Search Icon-1.png";
import SearchBar from "../components/SearchBar";
import iconShopping from "../agroonline/ic-shopping-add-shrine900.png";
import NavbarUserNotConnected from "../components/NavbarUserNotConnected";
import Footer from "../components/Footer";
import NavigationControl from "../components/NavigationUserConfig";
const Home = () => {
  const [produts, setProduts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  useEffect(() => {
    const getProducts = () => {
      const res = axios
        .get("http://localhost:5000/")
        .then((response) => {
          console.log(response), setProduts(response.data);
        })
        .catch((error) => console.log(error));
    };
    getProducts();
  }, []);

  /*const produts = [
    {
      id: 1,
      title: "tomatoes",
      price: 500,
      img: tomatoes1,
    },
    {
      id: 2,
      title: "tomatoes",
      price: 500,
      img: tomatoes2,
    },
    {
      id: 3,
      title: "Manioc",
      price: 500,
      img: manioc,
    },
    {
      id: 4,
      title: "patatoes",
      price: 500,
      img: patates,
    },
    {
      id: 5,
      title: "banana",
      price: 500,
      img: banana,
    },
    {
      id: 6,
      title: "ignames",
      price: 500,
      img: ignames,
    },
    {
      id: 7,
      title: "carottes",
      price: 500,
      img: carottes,
    },
    {
      id: 8,
      title: "pastheque",
      price: 500,
      img: pastheque,
    },
    {
      id: 9,
      title: "lemon",
      price: 500,
      img: lemon,
    },
    {
      id: 10,
      title: "mais",
      price: 500,
      img: mais,
    },
    {
      id: 11,
      title: "ble",
      price: 500,
      img: ble,
    },
  ];*/

  const handleBuy = () => {
    document.location.replace(`/Product/${product.id}`);
  };
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <>
      <NavigationControl />
      <NavbarUserNotConnected />
      <header id='banner'>
        <div className='banner-title'>
          <h1 className='banner-text'> Products </h1>
        </div>
        <div className='banner-bottom'>
          <div className='categories' style={{ bottom: "0" }}>
            <h4>Categories </h4>
          </div>
          <div className='sort-search' style={{ bottom: "0" }}>
            <h4>Sort </h4>
            <button className='search-product' onClick={toggleSearchBar}>
              <img className='search' src={search} alt='' srcset='' />
            </button>
          </div>
        </div>
        <div className='underline'></div>
      </header>
      {showSearchBar && <SearchBar />}
      <div className='main-container'>
        <div className='categories-list'>
          <ul className='main-list'>
            <li className='list-item'>
              Cereals
              <ul className='sub-list'>
                <li className='sub-list-item'>collection </li>
                <li className='sub-list-item'>collection </li>
                <li className='sub-list-item'>collection </li>
                <li className='sub-list-item'>collection </li>
                <li className='sub-list-item'>collection </li>
              </ul>
            </li>
            <li className='list-item'>Fruits</li>
            <li className='list-item'>Cash crops</li>
          </ul>
        </div>
        <div className='products-list'>
          {produts.map((product) => (
            <div className='product' key={product.id}>
              <div className='img-container'>
                <Link>
                  <img
                    className='img'
                    src={product.img}
                    alt={product.title}
                    srcset=''
                  />
                </Link>
              </div>
              <div className='product-infos'>
                <p className='title'>{product.title}</p>
                <p className='product-price'>{product.price}</p>
              </div>
              <div className='product-bottom'>
                <Link
                  to={`/Product/${product.id}`}
                  className='buy-link'
                  onClick={() => handleBuy()}
                >
                  Buy
                </Link>

                <button className='shop-link'>
                  <img src={iconShopping} alt='' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
