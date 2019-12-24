import { destroy } from 'mobx-state-tree';
import firebase from 'react-native-firebase';
import moment from 'moment';
import { getParent } from 'mobx-state-tree';

const productActions = self => ({
  fetchList() {

    self.productArray = [];
    self.loaderTrue();
   
		return unsubscribe = firebase.firestore().collection('products').where('Status', '==', true)
			.onSnapshot( (querySnapshot) =>  {
        var list = [];
        //console.log('QUERYYYYY',querySnapshot.size)
        querySnapshot.forEach( (doc) => {
            //console.log('YYYYYYYY', doc.data())
            list.push({ ...doc.data(), id: doc.id });
        });
        this.addList(list);
        console.log('LISTTTTT', list.length)
        self.loaderFalse();
      });
     
  },

  addList(list) {
    self.productArray = list;
  },

  /////////////////////////////////////


  loaderTrue() {
    self.loader = true;
  },
  loaderFalse() {
    self.loader = false;
  },

});

export default productActions;
