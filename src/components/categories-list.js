import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCategory } from "src/store/data/actions";
import { getCategory, getCategories } from "src/store/data/selectors";

import { CategoryCard } from "src/ui/cateogory-card";

export const CategoriesList = connect(
  createStructuredSelector({
    categories: getCategories,
    activeCategory: getCategory,
  }),
)(({ categories, activeCategory, dispatch }) =>
  categories.map(category => (
    <CategoryCard
      key={category.category}
      name={category.category}
      count={category.count}
      active={category.category === activeCategory}
      onClick={() => dispatch(toggleCategory(category.category))}
    />
  )),
);
