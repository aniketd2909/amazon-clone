import React from "react";
import CurrencyFormat from "react-currency-format";
import StarRatings from "react-star-ratings";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

function Product(props) {
  const [{ user }, dispatch] = useStateValue();

  const Paynow = () => {
    dispatch({
      type: "PAYNOW",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <p className="wishlist">
        <Tooltip title="Add to wishlist">
          <FavoriteBorderIcon
            onClick={addToWishlist}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </p>
      <div className="productImage">
        <img src={props.image} alt="not aval" />
      </div>

      <div className="productInfo">
        <p className="title">{props.title}</p>

        <CurrencyFormat
          renderText={(value) => <p className="price">{value}</p>}
          decimalScale={2}
          value={props.price}
          displayType={"text"}
          prefix={"₹ "}
        />
        <div className="starRating">
          <StarRatings
            numberOfStars={5}
            size="20"
            innerRadius="20"
            rating={props.rating}
          />
        </div>
      </div>
      <Link to={user ? `/payment` : `/login`}>
        <button className="buynowbutton" onClick={Paynow}>
          Buy now
        </button>
      </Link>
      <button className="addtocartbutton" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
