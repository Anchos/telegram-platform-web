import React from "react";
import Premium from "./premium";

export default class OwnerPromotion extends React.Component {
  render() {
    return (
      <div className="cp-promotion">
        <div className="cp-promotion__offer">
          <div className="cp-promotion__title">Purchase Premium</div>
          <Premium />
        </div>
      </div>
    );
  }
}