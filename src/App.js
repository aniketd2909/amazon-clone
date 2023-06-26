import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Wishlist from "./components/Wishlist/Wishlist";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const promise = loadStripe(
    "pk_test_51NMxZnGogk03LOwbKDhsWa4oi54W4Bf15gDsbqOj0uHdMq3FsxRIPivsmVW1RIz5Vmib1pnHpVqw1MyZiyZbpejo00plvI1gc9"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />

          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            }
          />

          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
                <Footer />
              </div>
            }
          />

          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/wishlist"
            element={
              <div>
                <Header />
                <Wishlist />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <div>
                <Header />
                <Orders />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
