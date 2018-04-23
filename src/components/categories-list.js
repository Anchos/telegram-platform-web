import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCategory, getActiveCategory, getCategories } from "~/store/data";

import { CategoryCard } from "~/ui/cateogory-card";

const mapStateToProps = createStructuredSelector({
  categories: getCategories,
  activeCategory: getActiveCategory,
});

const CategoriesListView = ({ categories, activeCategory, dispatch }) =>
  categories.map(category => (
    <CategoryCard
      key={category.name}
      name={category.name}
      count={category.count}
      active={category.name === activeCategory}
      onClick={() => dispatch(toggleCategory(category.name))}
    />
  ));

export const CategoriesList = connect(mapStateToProps)(CategoriesListView);
