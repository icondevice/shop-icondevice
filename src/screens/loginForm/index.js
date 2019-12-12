import React, { Component } from 'react';
import { Container, Header, Title, Body, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import colors from './../../assets/colors';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';

export default class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: colors.primaryColor }}
          androidStatusBarColor={colors.secondaryColor}
          hasTabs
        >
          <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            <Title>IconDevice</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading style={{ backgroundColor: colors.primaryColor }} ><Icon name="log-in" /><Text>Sign-In</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: colors.primaryColor }} ><Icon name="person-add" /><Text>Sign-Up</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}