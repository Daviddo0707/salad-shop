import React from "react";
import { Menu } from "semantic-ui-react";
import history from "../history";

const Header = () => {
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
