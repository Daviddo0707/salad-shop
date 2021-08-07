import React from "react";
import "./NumberPicker.css";
import { Icon } from "semantic-ui-react";

const NumberPicker = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div>
      <div className="quantity-btns btn-right">
        <Icon
          color={quantity === 0 ? "grey" : "orange"}
          name="minus circle"
          size="large"
          onClick={() => onDecrease()}
        />
      </div>
      <div className="quantity"> {quantity} </div>
      <div className="quantity-btns btn-left">
        <Icon
          color="green"
          name="plus circle"
          size="large"
          onClick={() => onIncrease()}
        />
      </div>
    </div>
  );
};
export default NumberPicker;
