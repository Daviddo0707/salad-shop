import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import useScreenSize from "use-screen-size";
import { Table, Button } from "semantic-ui-react";
import {
  getIngredients,
  incrementIngredient,
  decrementIngredient,
} from "../../actions/ingredientsActions";
import { getTotalPrice } from "../../helpers";
import Loader from "../../components/Loader";
import NumberPicker from "../../components/NumberPicker";
import {
  IngredientsTable,
  TotalPriceAndCheckoutBtn,
} from "./IngredientsStyles";

const Ingredients = ({
  getIngredients,
  ingredients,
  incrementIngredient,
  decrementIngredient,
}) => {
  const history = useHistory();
  const { width } = useScreenSize();
  const tableCellWidth = 7;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getIngredients();
  }, [getIngredients]);

  if (ingredients.length === 0) {
    return <Loader />;
  } else {
    return (
      <IngredientsTable width={width}>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={tableCellWidth}>Name</Table.HeaderCell>
              <Table.HeaderCell width={tableCellWidth}>
                Price ($)
              </Table.HeaderCell>
              <Table.HeaderCell width={tableCellWidth}>
                Quantity
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {ingredients.map(({ name, price, quantity }, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell width={tableCellWidth}>{name}</Table.Cell>
                  <Table.Cell width={tableCellWidth}>{price}</Table.Cell>
                  <Table.Cell width={tableCellWidth}>
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
        <TotalPriceAndCheckoutBtn>
          <h3>Total Price : {getTotalPrice(ingredients)} $</h3>
          <Button
            color="green"
            disabled={getTotalPrice(ingredients) === 0}
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </Button>
        </TotalPriceAndCheckoutBtn>
      </IngredientsTable>
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
