import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import colors from './../../assets/colors';
import { observer, inject } from 'mobx-react';
import {
  Spinner,
  Button,
  Card,
  CardItem,
  Input,
  Item,
  Left,
  Right,
  Container,
  Content,
  Body,
  Title,
  Header,
} from 'native-base';

class Tab1 extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderSignIn() {
    if (this.props.store.userStore.loading1) {
      return <Spinner color={colors.primaryColor} />;
    }

    return (
      <Button style={styles.buttonStyle} onPress={this.checkLogin}>
        <Text style={{ color: 'white' }}>Log in</Text>
      </Button>
    );
  }

  checkLogin = () => {
      if (this.props.store.userStore.email_text === "" || this.props.store.userStore.password === "") {
        return Alert.alert("Email and password required.")
      }
      this.props.store.userStore.onLoginPress();
  }

  render() {
    const { userStore } = this.props.store;
    return (
      <Container>
        <Content style={{ backgroundColor: 'white' }}>
          <Content style={{ padding: 10 }}>
            <Card>
              <CardItem>
                <Item>
                  <Input
                    value={userStore.email_text}
                    onChangeText={email => userStore.setEmail(email)}
                    placeholder="User@gmail.com"
                  />
                </Item>
              </CardItem>

              <CardItem>
                <Item>
                  <Input
                    secureTextEntry
                    placeholder="Password"
                    value={userStore.password}
                    onChangeText={password => userStore.setPassword(password)}
                  />
                </Item>
              </CardItem>

              <Text style={styles.errorTextStyle}>{userStore.error}</Text>

              <CardItem style={{ paddingLeft: 20, paddingRight: 20, justifyContent: 'center' }}>
                {this.renderSignIn()}
              </CardItem>
            </Card>

          </Content>
        </Content>
      </Container>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonStyle: {
    padding: 30,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
  },
};
export default inject('store')(observer(Tab1));
