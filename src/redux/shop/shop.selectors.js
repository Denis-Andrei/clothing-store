import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectMensCollections = createSelector(
    [selectShop],
    shop => shop.mensCollection
)

export const selectWomensCollections = createSelector(
    [selectShop],
    shop => shop.womensCollection
)

export const selectMensCollectionsOverview = createSelector(
    [selectMensCollections],
    mensCollection => Object.keys(mensCollection).map(key => mensCollection[key])
)

export const selectWomensCollectionsOverview = createSelector(
    [selectWomensCollections],
    womensCollection => Object.keys(womensCollection).map(key =>  womensCollection[key])
)

