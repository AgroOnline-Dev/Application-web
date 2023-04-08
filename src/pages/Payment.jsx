import "../Flow 1.css";
import banane from "../agroonline/image produits/banane.png";
import iconShopping from "../agroonline/ic-shopping-add-shrine900.png";
import omLogo from "../agroonline/Orange_Money_logo_PNG-1.png";
import mtnMomoLogo from "../agroonline/SeekPng.com_money-png-images_691715.png";
import { useParams, Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [logged, status] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [totalColor, setTotalColor] = useState("");
  const [isClicked, setButtonState] = useState(false);
  const [newDivVisible, setNewDivVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const printLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    printLoading();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mettre à jour l'état formData avec les valeurs du formulaire
  };

  const onClick = () => {
    setButtonState(true);
  };

  if (loading) {
    return <Loading />;
  }
  if (isClicked) {
    console.log("clicked");
    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
  }
  let totalToBuy = 0;
  if (!inputValue3) {
    totalToBuy = product.price;
  } else {
    totalToBuy = product.price * inputValue3;
  }

  return (
    <>
      <header id='banner'>
        <div className='banner-title'>
          <h1 className='banner-text'> Payment </h1>
        </div>
      </header>
      <div className='payment-container'>
        <div className='fom-div'>
          <form action='' className='paying-form' onSubmit={handleSubmit}>
            <div className='first-part-info'>
              <div className='form-heading-text'>
                <h3 className='Title'> Shipping options </h3>
              </div>
              <div className='underline-1'></div>
              <div className='field-group'>
                <input
                  className='input-field'
                  type='text'
                  placeholder='City'
                  value={inputValue1}
                  onChange={(e) => setInputValue1(e.target.value)}
                />
                <input
                  className='input-field'
                  type='text'
                  placeholder='Neighborhood'
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                />
                <input
                  className='input-field'
                  type='text'
                  placeholder='Quantity'
                  value={inputValue3}
                  onChange={(e) => setInputValue3(e.target.value)}
                />
              </div>
            </div>
            <div className='second-part-info'>
              <div className='form-heading-text'>
                <h3 className='Title'> Payment options </h3>
              </div>
              <div className='underline-1'></div>
              <div className='field-group-2'>
                <div className='orange-money'>
                  <div className='orange-infos'>
                    <input className='input-field-radio' type='radio' />
                    <div className='orange-money-text'>
                      <h3 className='Orange-money-title'>Orange money</h3>
                      <p className='orange-money-desc'>
                        Orange Money is the mobile money service of Orange S.A.,
                        available in most of the group's affiliates in Africa.
                      </p>
                    </div>
                  </div>
                  <div className='orange-money-logo'>
                    <img src={omLogo} alt='' srcset='' />
                  </div>
                </div>
                <div className='mtn-money'>
                  <div className='mtn-infos'>
                    <input className='input-field-radio' type='radio' />
                    <div className='mtn-money-text'>
                      <h3 className='mtn-money-title'>Mobile money</h3>
                      <p className='mtn-money-desc'>
                        Mobile money transfer and mobile wallet, is any of
                        various payment processing services operated under
                        financial regulations and performed from or via a mobile
                        device, as the cardinal class of digital wallet
                      </p>
                    </div>
                  </div>
                  <div className='mtn-money-logo'>
                    <img src={mtnMomoLogo} alt='' srcset='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='third-part-info'>
              <p className='input-number-text'> phone number </p>
              <input
                type='text'
                className='input-field'
                placeholder='your phone number'
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
              />
            </div>
            <div className='submit-button-div'>
              <input
                type='button'
                value='Submitting informations'
                className='submit-button'
                onClick={onClick}
              />
            </div>
          </form>
        </div>
        {isClicked ? (
          <>
            <div className='total-printer-div'>
              <div className='total-to-buy'>
                <p className='products-title'>Products</p>
                <div className='product-contenu'>
                  <p className='product-to-buy-title'>{product.title}</p>
                  <p className='product-to-buy-price'>{product.price}f</p>
                </div>
              </div>
              <div className='customer-info'>
                <p className='shipping-title'>Shipping</p>
                <div className='shipping-contenu'>
                  <div className='customer-infos'>
                    <p className='customer-name'>Name</p>
                    <p className='customer-name-value'>Noumbissi Stael</p>
                  </div>
                  <div className='customer-infos'>
                    <p className='customer-email'>Email</p>
                    <p className='customer-email-value'>
                      noumbissistael@gmail.com
                    </p>
                  </div>
                  <div className='customer-infos'>
                    <p className='customer-city'>City</p>
                    <p className='customer-city-value'>{inputValue1}</p>
                  </div>
                  <div className='customer-infos'>
                    <p className='customer-neignbordhood'>Neighborhood</p>
                    <p className='customer-neignbordhood-value'>
                      {inputValue2}
                    </p>
                  </div>
                  <div className='customer-infos'>
                    <p className='customer-quantity'>quantity</p>
                    <p className='customer-quantity-value'>{inputValue3}</p>
                  </div>
                  <div className='customer-infos'>
                    <p className='customer-number'>number</p>
                    <p className='customer-number-value'>{inputValue4}</p>
                  </div>
                </div>
              </div>
              <div className='Total-shipping-div'>
                <p className='total-text'>Total</p>
                <div className='underline-total'></div>
              </div>
              <div className='total-printer-price-div'>
                <p className='total-printer-price'>{totalToBuy}f</p>
              </div>
              <button className='purchase-btn'> Purchase</button>
            </div>
          </>
        ) : (
          <>
            <div className='total-printer-div'>
              <div className='total-to-buy'>
                <p className='products-title'>Products</p>
                <div className='product-contenu'>
                  <p className='product-to-buy-title'>{product.title}</p>
                  <p className='product-to-buy-price'>{product.price}f</p>
                </div>
              </div>
              <div className='Total-div'>
                <p className='total-text'>Total</p>
                <div className='underline-total'></div>
              </div>
              <div className='total-printer-price-div'>
                <p className='total-printer-price'>{product.price}f</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Payment;
