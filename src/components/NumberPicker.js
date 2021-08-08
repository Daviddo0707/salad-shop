import React from "react";
import { Icon } from "semantic-ui-react";
import "./NumberPicker.css";

const NumberPicker = ({ quantity, increase, decrease }) => {
  const maxCountPerUnit = 9;
  return (
    <div className="quantity-btns">
      <div className="btns">
        <Icon
          color={quantity === 0 ? "grey" : "yellow"}
          name="minus circle"
          size="large"
          onClick={() => decrease()}
        />
      </div>

      {quantity}

      <div className="btns ">
        <Icon
          color={quantity < maxCountPerUnit ? "green" : "grey"}
          name="plus circle"
          size="large"
          onClick={() => (quantity < maxCountPerUnit ? increase() : null)}
        />
      </div>
    </div>
  );
};
export default NumberPicker;
