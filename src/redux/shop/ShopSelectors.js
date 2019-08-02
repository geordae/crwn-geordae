import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// we need to convert an object into an array for the PreviewItemCollection component.
//we need to get the keys off the collection state(hats, jackets, mens, weomens)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// the [collectionurlparam] will have a unique variable that we
//evaulate inside of the square brackets.
//whatever varible we pass in (shop/hats)
//matches the object property(hats) of our collection array.
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
