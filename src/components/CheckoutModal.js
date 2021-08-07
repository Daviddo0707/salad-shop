import React from "react";
import { Modal, Button, Header, Divider } from "semantic-ui-react";
import history from "../history";
import "./CheckoutModal.css";

const CheckoutModal = ({
  handleClose,
  show,
  customerDetails,
  ingredientsInCart,
  totalPrice,
}) => {
  const handleCloseModal = () => {
    handleClose();
    history.push("/");
  };
  return (
    <div>
      <Modal
        closeOnDimmerClick={false}
        dimmer={"blurring"}
        open={show}
        onClose={handleClose}
        size={"tiny"}
      >
        <Modal.Header>
          <Header as="h1">Thank you!</Header>
          <span>Delivery is on its way!</span>
        </Modal.Header>
        <Modal.Content>
          <Header as="h3">Order Details:</Header>
          {ingredientsInCart.map(({ name, quantity }, index) => {
            return (
              <div key={index}>
                <span style={{ marginRight: "1rem" }}>{name}</span>
                <span>x{quantity}</span>
              </div>
            );
          })}
          <Header as="h3">Total Price: {totalPrice} $</Header>

          <Divider />
          <Header as="h3">Contact Information:</Header>
          <div className="contact-datail"> Name: {customerDetails.name}</div>
          <div className="contact-datail"> Email: {customerDetails.email}</div>
          {customerDetails.description && (
            <div className="contact-datail">
              Additional Notes: {customerDetails.description}
            </div>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => handleCloseModal()} positive>
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default CheckoutModal;
