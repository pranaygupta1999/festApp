//@ts-check
//so far so good
/**
 * @author Pranay Gupta
 * @created 10 Nov 2019
 * @description Impressions app
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Sidebar from './src/components/sidebar';
import HomeScreen from './src/components/HomeScreen';
import SettingScreen from './src/components/SettingScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import SplashScreen from './src/components/SplashScreen';
import EventsScreen from './src/screens/Events/index';

const MyDrawerNavigator = createDrawerNavigator({
  MainHome: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingScreen,
  },
  Events: {
    screen: EventsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 1000),
    );
  };
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return <MyApp />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
