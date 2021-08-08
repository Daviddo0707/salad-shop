import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useScreenSize from "use-screen-size";
import { Button, Header } from "semantic-ui-react";
import {
  LandingPageContainer,
  ParagraphContent,
  GreetingsContent,
} from "./LandingPageStyles";
import salad from "../../images/salad.jpg";

const LandingPage = () => {
  const history = useHistory();
  const { width } = useScreenSize();
  const miniWidh = 767;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingPageContainer>
      <GreetingsContent>
        <Header as="h5">OUR SHOP</Header>
        <Header as="h1">Fast, Fresh, Affordable</Header>
        <ParagraphContent>
          The Salad Shop brings you an affordable, healthy alternative to fast
          food, knowing that your time is valuable and you care about what you
          put in your body. We are a take-out restaurant, allowing you the
          flexibility of eating at work, home, or one of your other favorite
          locations.
        </ParagraphContent>
        <ParagraphContent>
          Choose from a make-it-yourself salad bar or convenient pre-made salads
          when you order online. Add one of our daily soups, and you're set!
        </ParagraphContent>

        <Button color="green" onClick={() => history.push("/ingredients")}>
          Order Salad
        </Button>
      </GreetingsContent>
      {width > miniWidh && (
        <div style={{ marginLeft: "48px" }}>
          <img src={salad} alt="Salad" height={500} width={450}></img>
        </div>
      )}
    </LandingPageContainer>
  );
};
export default LandingPage;
