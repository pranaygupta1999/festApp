//so far so good
/**
 * @author Pranay Gupta
 * @created 10 Nov 2019
 * @description Start page for event module in impressions app 2k19
 */

import React from "react";
import { AppRegistry, View, Text } from "react-native";
import AllModules from "./AllModules"
import ListOfEvents from "./ListOfEvents";
import EventDetails from "./EventDetails"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Colors } from "react-native/Libraries/NewAppScreen";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const EventsNavigator = createStackNavigator(
    {
        Home: {
            screen: AllModules,

            navigationOptions: () => ({
                title: 'Home',
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#66f',
                }
            })
        },
        ListOfEvents: {
            screen: ListOfEvents,

            navigationOptions: () => ({
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#66f',
                }
            })
        },
        EventDetails: {
            screen: EventDetails,

            navigationOptions: () => ({
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#66f',
                }
            })
        }
    },

)

const Events = createAppContainer(EventsNavigator);
export default Events;
