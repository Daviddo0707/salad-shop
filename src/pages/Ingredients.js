import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getIngredients,
  incrementIngredient,
  decrementIngredient,
} from "../actions/ingredientsActions";
import "./Ingredients.css";
import history from "../history";
import Loader from "../components/Loader";
import NumberPicker from "../components/NumberPicker";
import { Table, Button } from "semantic-ui-react";

const Ingredients = ({
  getIngredients,
  ingredients,
  incrementIngredient,
  decrementIngredient,
}) => {
  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  //helper function to calcuate the current total price
  const getTotalPrice = () => {
    return ingredients.reduce(function (prev, cur) {
      return parseFloat((prev + cur.price * cur.quantity).toFixed(2));
    }, 0);
  };
  if (ingredients.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="ingredients-table">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={7}>Name</Table.HeaderCell>
              <Table.HeaderCell width={7}>Price ($)</Table.HeaderCell>
              <Table.HeaderCell width={7}>Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {ingredients.map(({ name, price, quantity }, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell width={7}>{name}</Table.Cell>
                  <Table.Cell width={7}>{price}</Table.Cell>
                  <Table.Cell width={7}>
                    <NumberPicker
                      onIncrease={() => incrementIngredient(index)}
                      onDecrease={() => decrementIngredient(index)}
                      quantity={quantity}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <div className="total-price-and-chekout-btn">
          <h3>Total Price : {getTotalPrice()} $</h3>
          <Button
            color="green"
            className="checkout-btn"
            disabled={getTotalPrice() === 0}
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </Button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};
export default connect(mapStateToProps, {
  getIngredients,
  incrementIngredient,
  decrementIngredient,
})(Ingredients);
