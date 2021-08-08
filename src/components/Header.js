import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const history = useHistory();
  return (
    <Menu size="massive">
      <Menu.Item
        className="ui header"
        name="Salad Shop"
        onClick={() => history.push("/")}
      />
    </Menu>
  );
};
export default Header;
