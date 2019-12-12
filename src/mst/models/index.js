import { types } from 'mobx-state-tree';

import productStore from './product';
import userStore from './user';
// Store model
const storeModel = types.model('Store', {
  productStore: productStore,
  userStore: userStore,
});

export default storeModel;
