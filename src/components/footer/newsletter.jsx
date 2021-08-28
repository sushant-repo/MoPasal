import React from "react";
import Button from "../common/button";

const NewsLetter = () => {
  return (
    <div className="footer__block footer__newsletter">
      <h2 className="footer__title">Sign up to get the latest from MoPasal</h2>
      <p>
        Become a MoPasal VIP & be the first to know! You'll receive the latest
        news, product launches and promotions.
      </p>
      <div className="input-group">
        <input type="text" placeholder="Email Address" />
        <Button className="btn btn--primary--outline">Subscribe</Button>
      </div>
      <p>
        By signing up, you agree to receive emails on latest updates and product
        launches, and you agree to our terms and conditions.p
      </p>
    </div>
  );
};

export default NewsLetter;
