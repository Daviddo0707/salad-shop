import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  TextArea,
  Header,
  Table,
} from "semantic-ui-react";
import CheckoutModal from "../../components/CheckoutModal";
import Loader from "../../components/Loader";
import { getTotalPrice, validateEmail } from "../../utils/helpers";
import { CheckoutContainer, FromAndBtnContainer } from "./CheckoutStyles";

const Checkout = ({ ingredients }) => {
  const [ingredientsInCart, setIngredientsInCart] = useState([]);

  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custDescription, setCustDescription] = useState("");

  const [emailError, setEmailError] = useState(undefined);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIngredientsInCart(
      ingredients.filter((ingredient) => ingredient.quantity > 0)
    );
  }, [setIngredientsInCart, ingredients]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(custEmail)) {
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
      <div>
        <CheckoutContainer>
          <Header as="h1">Order Details</Header>
          <Table singleLine unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price ($)</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {ingredientsInCart.map(({ name, price, quantity }, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{price}</Table.Cell>
                    <Table.Cell>{quantity}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>

          <div style={{ fontWeight: "bolder" }}>
            Total Price: {getTotalPrice(ingredients)} $
          </div>
          <Header as="h2">Contact Details</Header>

          <FromAndBtnContainer>
            <Form size={"large"} onSubmit={handleSubmit}>
              <Form.Group widths="equal" unstackable>
                <Form.Input
                  control={Input}
                  required
                  name="name"
                  label="Name"
                  placeholder="Name"
                  onChange={(e) => setCustName(e.target.value)}
                />

                <Form.Input
                  id="form-input-control-error-email"
                  control={Input}
                  required
                  label="Email"
                  placeholder="joe@schmoe.com"
                  onChange={(e) => setCustEmail(e.target.value)}
                  error={emailError}
                />

                <Form.Input
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Additional Notes"
                  placeholder="Additional Notes"
                  onChange={(e) => setCustDescription(e.target.value)}
                />
              </Form.Group>

              <Button color="green" type="submit">
                Order
              </Button>
            </Form>
          </FromAndBtnContainer>
        </CheckoutContainer>

        <CheckoutModal
          handleClose={handleCloseModal}
          show={showModal}
          custName={custName}
          custEmail={custEmail}
          custDescription={custDescription}
          ingredientsInCart={ingredientsInCart}
          totalPrice={getTotalPrice(ingredients)}
        />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};
export default connect(mapStateToProps)(Checkout);
