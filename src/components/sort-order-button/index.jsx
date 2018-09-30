import React from "react";
import PropTypes from "prop-types";
import cn from "class-names";
import style from "./style.scss";

const reverse = {
  asc: "desc",
  desc: "asc",
};

class SortOrderButton extends React.Component {
  onChange = () => {
    const { current, onChange, filter } = this.props;

    if (current.filter === filter) {
      return onChange(filter, reverse[current.order]);
    }

    return onChange(filter, "desc");
  };

  render() {
    const { current, filter, children } = this.props;
    const active = current.filter === filter;
    return (
      <div
        className={cn("sort-order-button", active && "sort-order-button_active")}
        onClick={this.onChange}
      >
        {active && (
          <div
            className={cn(
              "sort-order-button__indicator",
              `sort-order-button__indicator_${current.order}`,
            )}
          />
        )}
        {children}
      </div>
    );
  }
}

SortOrderButton.propTypes = {
  current: PropTypes.shape({ filter: PropTypes.string, order: PropTypes.oneOf(["asc", "desc"]) }),
  filter: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
};

export default SortOrderButton;
