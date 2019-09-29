import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ handleStripeToken }) => {
  return (
    <StripeCheckout
      name="eFeedback"
      description="$5 for 5 email credits"
      amount={500}
      token={token => handleStripeToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="waves-effect waves-light btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(
  null,
  actions
)(StripeButton);
