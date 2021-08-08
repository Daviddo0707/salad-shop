import React from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Header, Divider } from "semantic-ui-react";
import "./CheckoutModal.css";

const CheckoutModal = ({
  handleClose,
  show,
  custName,
  custEmail,
  custDescription,
  ingredientsInCart,
  totalPrice,
}) => {
  const history = useHistory();
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
                <div className="order-detail-line">
                  {quantity} {name}
                </div>
              </div>
            );
          })}
          <Header as="h3">Total Price: {totalPrice} $</Header>

          <Divider />
          <Header as="h3">Contact Information:</Header>
          <div className="contact-datail"> Name: {custName}</div>
          <div className="contact-datail"> Email: {custEmail}</div>
          {custDescription && (
            <div className="contact-datail">
              Additional Notes: {custDescription}
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
