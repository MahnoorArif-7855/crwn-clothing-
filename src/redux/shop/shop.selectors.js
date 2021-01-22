import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    Shop => Shop.collections
);

export const selectCollectionForPrevirew = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
 createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]);