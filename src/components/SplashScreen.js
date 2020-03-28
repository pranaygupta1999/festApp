import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: 'orange'}];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={styles}>
        <Image source={require('../assets/splash.jpg')} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'stretch',
  },
});

export default SplashScreen;
