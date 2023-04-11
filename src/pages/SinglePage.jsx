import "../Flow 1.css";
import banane from "../agroonline/image produits/banane.png";
import iconShopping from "../agroonline/ic-shopping-add-shrine900.png";

import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import NavbarUserConnected from "../components/NavbarUserConnected";
const SinglePage = () => {
  const [cocktail, setCocktail] = useState(null);
  const [product, setProduct] = useState({});
  const [logged, status] = useState(false);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const navigate = useNavigate(productId);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios
          .get(`http://localhost:5000/Product/${productId}`)
          .then((response) => {
            if (response) {
              console.log(response.data.product);
              console.log(response.data.status);
              setProduct(response.data.product);
            }
            if (response.data.status != 0) {
              status(true);
            } else status(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  const BuyAction = () => {
    navigate(`/Payment/${product.id}`);
  };

  return (
    <>
      <NavbarUserConnected />
      <header id='banner'>
        <div className='banner-title'>
          <h1 className='banner-text'> Single product </h1>
        </div>
      </header>

      <div className='product-container'>
        <div className='image-container'>
          <img className='product-image' src={product.img} alt='' srcset='' />
        </div>
        <div className='infos-container'>
          <div className='infos'>
            <p className='title-product'> {product.title}</p>
            <p className='product-region'> A local production from the south</p>

            <p className='product-desc'>{product.description}</p>

            <div className='stock-price'>
              <p className='stock'>{product.stock} packets available</p>
              <p className='price'>{product.price} f per packet </p>
            </div>
            <div className='buy-cart'>
              <button className='cart-btn'>
                <img
                  className='icon-shopping-signglePage'
                  src={iconShopping}
                  alt=''
                  srcset=''
                />
                <span className='text-cart-btn'> Add to cart</span>
              </button>
              <button className='buy-btn' onClick={() => BuyAction()}>
                <span className='text-buy-btn'> Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
