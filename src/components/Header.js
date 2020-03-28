import React from 'react';
import {Header, Left, Right, Body, Button, Icon} from 'native-base';

class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
    );
  }
}
export default HeaderComponent;
