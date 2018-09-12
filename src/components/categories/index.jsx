import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl, intlShape } from "react-intl";
import Loader from "../loader";
import qs from "query-string";
import classNames from "class-names";
import { getLocalizedCategories } from "../../static-data/categories";
import style from "./style.scss";

class Category extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.value);
  };

  render() {
    const { label, current } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={classNames(
          "channel-categories__category",
          current && "channel-categories__category_current",
        )}
      >
        {label}
      </div>
    );
  }
}

Category.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  current: PropTypes.bool,
};

class Categories extends React.Component {
  categories = getLocalizedCategories(this.props.intl);

  componentWillUpdate(newProps) {
    if (newProps.intl.messages !== this.props.messages)
      this.categories = getLocalizedCategories(newProps.intl);
  }

  handleCategoryClick = categoryId => {
    this.props.onCategoryChange(categoryId);
  };

  render() {
    const { currentCategory } = this.props;
    return (
      <div className="channel-categories">
        {this.categories.map(category => (
          <Category
            onClick={this.handleCategoryClick}
            current={category.value === currentCategory}
            key={category.value}
            {...category}
          />
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  onCategoryChange: PropTypes.func,
  currentCategory: PropTypes.number,
  intl: intlShape,
};

export default injectIntl(Categories);
