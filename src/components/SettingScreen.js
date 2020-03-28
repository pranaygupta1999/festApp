import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Container, Left, Body, Right, Icon, Header, Button} from 'native-base';

class SettingScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.navigation.toggleDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <View style={styles.content}>
          <Text>Setting Screen</Text>
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

export default SettingScreen;
