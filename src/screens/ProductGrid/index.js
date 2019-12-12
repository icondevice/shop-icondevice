import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native'; 
import {
  Button,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Spinner
} from "native-base";
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import colors from '../../assets/colors';

import Card from './Card'

const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 2 ) 


class ProductGrid extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { productStore } = this.props.store;
    productStore.fetchList();
  }

  componentWillUnmount(){
    const { productStore } = this.props.store;
    productStore.storeUnsubscribe();
  }

  /*
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
    }
  }

  async componentDidMount() {
      this.getPublicView();
  }

  componentWillUnmount(){
      this.unsubscribe();
  }

  getPublicView = async () => {
      const ref = await firebase.firestore().collection('products').where('Status', '==', true);
      this.unsubscribe = ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
      //console.log(querySnapshot);
      const taskList = [];
      querySnapshot.forEach((doc) => {
          //console.log(doc.id)
          taskList.push({ ...doc.data(), id: doc.id });
      });
      console.log('taskList', taskList)
      this.setState({
          taskList
      });
  }
  */

  _keyExtractor = (item, index) => item.id;

  renderRowItem = (itemData) => {
    return (
      /*
      <View>
        <Image style={{ height: equalWidth,  width : equalWidth}} source={{ uri: itemData.item.URL }} resizeMode='cover' />
      </View>
      */
      <Card
      key={itemData.item.id}
      imageUrl={itemData.item.Image}
      title={itemData.item.Title}
      subtitle={'$ ' + itemData.item.Price}
      buttonText='BUY'
      width={equalWidth} />

    )
  }


  render() {
    const { productStore } = this.props.store;

    //console.log('PRODUCTTTTTTT', toJS(productStore.productArray));
    console.log('PRODUCCCCCCC', productStore.productArray.length)

    if (productStore.loader == true) {
      return (
        <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner color={colors.primaryColor} />
        </Container>
      );
    }

    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: colors.primaryColor }} androidStatusBarColor={colors.secondaryColor}>
          <Body>
            <Title style={styles.title}>Katelog</Title>
          </Body>
          <Right>
            <Button
              transparent
              style={{ alignSelf: 'flex-start' }}
              full
              onPress={() => this.props.store.userStore.signoutUser()}
            >
              <Icon type="AntDesign" style={{ fontSize: 18 }} name="logout" />
            </Button>
          </Right>
        </Header>
        <FlatList
          data={toJS(productStore.productArray)}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  title: {
    fontFamily: "LibreBaskerville-Regular",
    fontSize: 30
  }
});
 
export default inject('store')(observer(ProductGrid));