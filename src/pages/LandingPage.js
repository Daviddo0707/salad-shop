import React from "react";
import history from "../history";
import "./LandingPage.css";
import { Button, Header } from "semantic-ui-react";
import salad from "../images/salad.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="greetings">
        <Header as="h5">OUR SHOP</Header>
        <Header as="h1">Fast, Fresh, Affordable</Header>
        <p>
          The Salad Shop brings you an affordable, healthy alternative to fast
          food, knowing that your time is valuable and you care about what you
          put in your body. We are a take-out restaurant, allowing you the
          flexibility of eating at work, home, or one of your other favorite
          locations.
        </p>
        <p>
          Choose from a make-it-yourself salad bar or convenient pre-made salads
          when you order online. Add one of our daily soups, and you're set!
        </p>

        <Button color="green" onClick={() => history.push("/ingredients")}>
          {" "}
          Order Salad
        </Button>
      </div>
      <div style={{ marginLeft: "3rem" }}>
        <img src={salad} alt="Salad" height={500} width={450}></img>
      </div>
    </div>
  );
};
export default LandingPage;
