import React from "react";
import { connect } from "react-redux";
import Loader from "../loader";
import qs from "query-string";
import classNames from "class-names";
import PropTypes from "prop-types";
import style from "./style.scss";

const categories = [
  { label: "All categories", id: 0 },
  { label: "Science and Technology", id: 1 },
  { label: "Telegram", id: 2 },
  { label: "Cryptocurrencies", id: 3 },
  { label: "Cars and Motorcycles", id: 4 },
  { label: "Business and Startups", id: 5 },
  { label: "Blogging", id: 6 },
  { label: "18+", id: 7 },
  { label: "Health and Sport", id: 8 },
  { label: "Games and Apps", id: 9 },
  { label: "Pictures and Photos", id: 10 },
  { label: "Cinema and TV", id: 11 },
  { label: "Culture and Art", id: 12 },
  { label: "Fashion and Beauty", id: 13 },
  { label: "Music", id: 14 },
  { label: "News and Media", id: 15 },
  { label: "Education", id: 16 },
  { label: "Politics", id: 17 },
  { label: "Tourism", id: 18 },
  { label: "Work and Career", id: 19 },
  { label: "Marketing", id: 20 },
  { label: "Quotes", id: 21 },
  { label: "Entertainment", id: 22 },
  { label: "Design", id: 23 },
  { label: "Food and Cooking", id: 24 },
  { label: "Other", id: 25 },
];

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
  handleCategoryClick = categoryId => {
    this.props.onCategoryChange(categoryId);
  };

  render() {
    const {currentCategory} = this.props;
    return (
      <div className="channel-categories">
        {categories.map(category => (
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
  currentCategory: PropTypes.number
};

export default Categories;
