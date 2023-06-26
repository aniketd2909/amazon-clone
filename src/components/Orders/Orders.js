import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";
import { collection, getDocs } from "firebase/firestore";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    if (user) {
      const getData = async () => {
        const querySnapshot = await getDocs(
          collection(db, "users", user?.uid, "orders")
        );
        console.log(querySnapshot);
        setOrders(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      };
      getData();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <>
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
