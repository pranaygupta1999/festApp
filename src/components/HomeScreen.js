import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Container, Left, Body, Right, Icon, Header, Button} from 'native-base';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <View style={styles.content}>
          <Text>Home Screen</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
