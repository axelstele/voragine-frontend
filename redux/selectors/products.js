import { createSelector } from 'reselect';

export const productsSelector = ({ products }) => products;

export const dataSelector = createSelector(
  productsSelector,
  (products) => products?.data,
);
