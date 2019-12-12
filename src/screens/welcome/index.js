import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import colors from './../../assets/colors';
import {
  Button,
  Content,
  Container,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Header,
  Icon,
  Title,
  Form,
  Input,
  Item,
  Spinner,
} from 'native-base';


class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };


  render() {

    return (
      <Container style={styles.container}>
        <Content>
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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

          </View>

        </Content>
      </Container>
    );
  }


}

export default inject('store')(observer(Welcome));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: "LibreBaskerville-Regular",
    fontSize: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
