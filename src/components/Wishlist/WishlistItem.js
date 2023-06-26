import React from "react";
import CurrencyFormat from "react-currency-format";
import "./WishlistItem.css";
import amzFullfilled from "../../assets/A_Fullfilled.png";
import { useStateValue } from "../../StateProvider";

function CartItem(props) {
  const [dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  const deleteItems = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      rating: props.rating,
    });
  };

  return (
    <div className="cartItems">
      <div className="ImageDivs">
        <img src={props.image} alt="" className="cartItemImages" />
      </div>

      <div className="infos">
        <div className="namePriceInfos">
          <p className="cartItemTitles">
            <strong>{props.title}</strong>
          </p>

          <CurrencyFormat
            renderText={(value) => (
              <p className="cartItemPrices">
                <strong>{value}</strong>
              </p>
            )}
            decimalScale={2}
            value={props.price}
            displayType={"text"}
            prefix={"₹ "}
          />
        </div>

        <div className="extraDetails">
          <p style={{ color: "green" }}>In stock</p>
          <img src={amzFullfilled} alt="amazon full filled" />
        </div>

        <div className="buttonInfos">
          <button className="cartAddButton" onClick={addToBasket}>
            Add to Cart
          </button>
          <br></br>
          <button className="cartDeleteButton" onClick={deleteItems}>
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
