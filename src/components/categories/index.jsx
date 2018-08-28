import React from "react";
import { withRouter } from "react-router";
import qs from "query-string";
import classNames from "class-names";
import PropTypes from "prop-types";
import style from "./style.css";

const categories = [
  { label: "All categories", address: "" },
  { label: "Science and Technology", address: "science" },
  { label: "Telegram", address: "telegram" },
  { label: "Work and Career", address: "career" },
  { label: "Pictures and Photos", address: "photos" },
  { label: "Cryptocurrencies", address: "crypto" },
  { label: "Cinema and TV", address: "cinema" },
  { label: "18+", address: "pron" },
  { label: "Marketing", address: "marketing" },
  { label: "Entertainment", address: "entertainment" },
  { label: "Culture and Art", address: "culture" },
  { label: "Blogging", address: "blogging" },
  { label: "Games and Apps", address: "games" },
  { label: "News and Media", address: "news" },
  { label: "Tourism", address: "tourism" },
  { label: "Politics", address: "politics" },
  { label: "Design", address: "design" },
  { label: "Fashion and Beauty", address: "fashion" },
  { label: "Health and Sport", address: "health" },
  { label: "Music", address: "music" },
  { label: "Business and Startups", address: "business" },
  { label: "Food and Cooking", address: "food" },
  { label: "Cars and Motorcycles", address: "cars" },
  { label: "Other", address: "other" },
];

class Category extends React.Component {
  shouldComponentUpdate = newProps => newProps.current !== this.props.current;

  handleClick = () => {
    this.props.onClick(this.props.address);
  };

  render() {
    const { label, address, current } = this.props;
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
  shouldComponentUpdate = newProps => newProps.location.search !== this.props.location.props;

  handleCategoryClick = address => {
    this.props.history.push({ search: `?category=${address}` });
  };

  render() {
    console.log(qs.parse(this.props.location.search));
    const currentAddress = qs.parse(this.props.location.search).category || "";
    return (
      <div className="channel-categories">
        {categories.map(category => (
          <Category
            onClick={this.handleCategoryClick}
            current={category.address === currentAddress}
            key={category.address}
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
};

export default withRouter(Categories);
