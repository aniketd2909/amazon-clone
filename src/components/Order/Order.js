import React from "react";
import "./Order.css";
import moment from "moment";
import CartItem from "../CartItem/CartItem";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CartItem
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <p className="order__total">
            <strong>Order Total: {value}</strong>
          </p>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
