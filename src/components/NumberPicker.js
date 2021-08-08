import React from "react";
import { Icon } from "semantic-ui-react";
import "./NumberPicker.css";

const NumberPicker = ({ quantity, onIncrease, onDecrease }) => {
  const maxCountPerUnit = 9;
  return (
    <div className="quantity-and-btns">
      <div className="quantity-btns">
        <Icon
          color={quantity === 0 ? "grey" : "yellow"}
          name="minus circle"
          size="large"
          onClick={() => onDecrease()}
        />
      </div>

      {quantity}

      <div className="quantity-btns ">
        <Icon
          color={quantity < maxCountPerUnit ? "green" : "grey"}
          name="plus circle"
          size="large"
          onClick={() => (quantity < maxCountPerUnit ? onIncrease() : null)}
        />
      </div>
    </div>
  );
};
export default NumberPicker;
