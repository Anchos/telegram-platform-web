import React from "react";

const Premium = props => {
  return (
    <div className="cp-promotion__premium">
      <div className="cp-promotion__premium-option">
        <div className="cp-promotion__premium-btn cp-promotion__premium-btn--white">
          LitePremium
        </div>
        <div className="cp-promotion__premium-prices">
          <div className="cp-promotion__premium-price">500 R/ 7 days</div>
          <div className="cp-promotion__premium-price">2000 R/ 30 days</div>
        </div>
      </div>
    </div>
  );
}

export default Premium;