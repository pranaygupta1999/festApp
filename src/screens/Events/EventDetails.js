import React, { Component } from "react";
import { Content, Text } from "native-base";
import { View, StyleSheet } from "react-native";

export default class EventList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('eventName', "Events")
        }
    }
    render() {
        const navigation = this.props.navigation;
        const event = navigation.getParam('event', "Events");
        console.log(event)
        return (
            <Content >
                <Text>{event.name}</Text>
            </Content>
        )
    }
}
const styles = StyleSheet.create({
    paddedContainer: {
        padding: 5
    }
})