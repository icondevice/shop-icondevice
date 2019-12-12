import { types } from 'mobx-state-tree';

import productActions from './../actions/productActions';

// Individual workout model
const productModel = types.model('productModel', {
  Title: types.string,
  Category: types.string,
  Price: types.string,
  Status: types.boolean,
  Image: types.maybe(types.string),
  ImageSize: types.integer,
  time: types.string,
  uid: types.string,
  id: types.string
});

const productStore = types
  .model('productStore', {
    productArray: types.array(productModel),
    loader: types.boolean,
  })
  .views(self => ({

  }))
  .actions(productActions);

export default productStore;
