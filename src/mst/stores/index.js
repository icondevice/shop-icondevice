import storeModel from './../models';

// Create instance of store model
const store = storeModel.create({
  productStore: {
    loader: false,
    productArray: [],
  },
  userStore: {
    uid: '',
    email: '',
    email_text: '',
    password: '',
    error: '',
    loading1: false,
    loading2: false,
  },
});

export default store;
