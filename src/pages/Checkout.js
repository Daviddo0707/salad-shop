import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, TextArea, Header } from "semantic-ui-react";
import CheckoutModal from "../components/CheckoutModal";
import "./Checkout.css";
import Loader from "../components/Loader";

const Checkout = ({ ingredients }) => {
  const [ingredientsInCart, setIngredientsInCart] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [emailError, setEmailError] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    setIngredientsInCart(
      ingredients.filter((ingredient) => ingredient.quantity > 0)
    );
  }, [setIngredientsInCart, ingredients]);

  //functions to handlechange in each prop of the customer details
  const onChangeName = (e) => {
    e.preventDefault();
    setCustomerDetails({ ...customerDetails, name: e.target.value });
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    setCustomerDetails({ ...customerDetails, email: e.target.value });
  };
  const onChangeDescription = (e) => {
    e.preventDefault();
    setCustomerDetails({ ...customerDetails, description: e.target.value });
  };

  //helper function to calculate current total price
  const getTotalPrice = () => {
    return ingredients.reduce(function (prev, cur) {
      return parseFloat((prev + cur.price * cur.quantity).toFixed(2));
    }, 0);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email)) {
      setEmailError({
        content: "Please enter a valid email",
        pointing: "above",
      });
    } else {
      handleShowModal();
    }
  };

  if (!ingredients.lengh === 0) {
    return <Loader />;
  } else {
    return (
      <div className="checkout-page">
        <Header as="h1">Order Details</Header>
        <div>
          <div className="ingredient-row">
            <div className="ingredient-col title">Name</div>
            <div className="ingredient-col title">Price ($)</div>
            <div className="ingredient-col title">Quantity</div>
          </div>
          {ingredientsInCart.map(({ name, price, quantity }, index) => {
            return (
              <div className="ingredient-row" key={index}>
                <div className="ingredient-col ">{name}</div>
                <div className="ingredient-col ">{price} </div>
                <div className="ingredient-col ">{quantity}</div>
              </div>
            );
          })}
          <div className="title">Total Price: {getTotalPrice()} $</div>
          <Header as="h2">Contact Details</Header>
          <div className="contact-details-form">
            <Form size={"large"} onSubmit={handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  required
                  label="Name"
                  placeholder="Name"
                  onChange={onChangeName}
                />
                <Form.Field
                  id="form-input-control-error-email"
                  control={Input}
                  required
                  label="Email"
                  placeholder="joe@schmoe.com"
                  onChange={onChangeEmail}
                  error={emailError}
                />
              </Form.Group>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Additional Notes"
                placeholder="Additional Notes"
                onChange={onChangeDescription}
              />
              <Button color="green" type="submit">
                Order
              </Button>
            </Form>
          </div>
        </div>
        <CheckoutModal
          handleClose={handleCloseModal}
          show={showModal}
          customerDetails={customerDetails}
          ingredientsInCart={ingredientsInCart}
          totalPrice={getTotalPrice()}
        />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};
export default connect(mapStateToProps)(Checkout);
