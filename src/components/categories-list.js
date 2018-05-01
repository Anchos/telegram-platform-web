import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCategory } from "~/store/data/actions";
import { getCategory, getCategories } from "~/store/data/selectors";

import { CategoryCard } from "~/ui/cateogory-card";

const mapStateToProps = createStructuredSelector({
  categories: getCategories,
  activeCategory: getCategory,
});

const CategoriesListView = ({ categories, activeCategory, dispatch }) =>
  categories.map(category => (
    <CategoryCard
      key={category.category}
      name={category.category}
      count={category.count}
      active={category.category === activeCategory}
      onClick={() => dispatch(toggleCategory(category.category))}
    />
  ));

export const CategoriesList = connect(mapStateToProps)(CategoriesListView);
