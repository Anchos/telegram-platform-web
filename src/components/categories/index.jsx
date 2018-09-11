import React from "react";
import { connect } from "react-redux";
import { injectIntl, intlShape } from "react-intl";
import Loader from "../loader";
import qs from "query-string";
import classNames from "class-names";
import PropTypes from "prop-types";
import style from "./style.scss";

class Category extends React.Component {
  shouldComponentUpdate = newProps => newProps.current !== this.props.current;

  handleClick = () => {
    this.props.onClick(this.props.id);
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
  categories = [
    { label: this.props.intl.messages["category.all"], id: 0 },
    { label: this.props.intl.messages["category.science"], id: 1 },
    { label: this.props.intl.messages["category.telegram"], id: 2 },
    { label: this.props.intl.messages["category.crypto"], id: 3 },
    { label: this.props.intl.messages["category.cars"], id: 4 },
    { label: this.props.intl.messages["category.business"], id: 5 },
    { label: this.props.intl.messages["category.blogging"], id: 6 },
    { label: this.props.intl.messages["category.porn"], id: 7 },
    { label: this.props.intl.messages["category.health"], id: 8 },
    { label: this.props.intl.messages["category.games"], id: 9 },
    { label: this.props.intl.messages["category.pictures"], id: 10 },
    { label: this.props.intl.messages["category.cinema"], id: 11 },
    { label: this.props.intl.messages["category.culture"], id: 12 },
    { label: this.props.intl.messages["category.fashion"], id: 13 },
    { label: this.props.intl.messages["category.music"], id: 14 },
    { label: this.props.intl.messages["category.news"], id: 15 },
    { label: this.props.intl.messages["category.education"], id: 16 },
    { label: this.props.intl.messages["category.politics"], id: 17 },
    { label: this.props.intl.messages["category.tourism"], id: 18 },
    { label: this.props.intl.messages["category.work"], id: 19 },
    { label: this.props.intl.messages["category.marketing"], id: 20 },
    { label: this.props.intl.messages["category.quotes"], id: 21 },
    { label: this.props.intl.messages["category.entertainment"], id: 22 },
    { label: this.props.intl.messages["category.design"], id: 23 },
    { label: this.props.intl.messages["category.food"], id: 24 },
    { label: this.props.intl.messages["category.other"], id: 25 },
  ];

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
            current={category.id === currentCategory}
            key={category.id}
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
