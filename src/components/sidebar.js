import React from 'react';
import {Text} from 'react-native';
import {Button, Content, Container} from 'native-base';

class Sidebar extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor: 'fff'}}>
        <Content>
          <Text>Hello</Text>
        </Content>
      </Container>
    );
  }
}
export default Sidebar;
