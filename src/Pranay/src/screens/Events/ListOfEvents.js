//@ts-check
//so far so good
/**
 * @author Pranay Gupta
 * @created 10 Nov 2019
 * @description Home screen for events
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Grid, Row, Col, Content, Container } from "native-base";
import EventCard from "../../components/EventCard";
//import * as EventList from "./evetlist.json"

export default class ListOfEvents extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', "Module")
        };
    }
    clickHandler = (event) => {
        console.log(event.name);
        this.props.navigation.navigate("EventDetails", {event:event, eventName: event.name});
    }
    render() {
        const navigation = this.props.navigation;
        const eventsList = navigation.getParam('events', []);
        var events = []
        for (let i = 0; i < eventsList.length; i++) {
            const element = eventsList[i];
            events.push(
                <Row key={i}>
                    <Col>
                        <View style={styles.paddedContainer}>
                            <EventCard event={element} onPress={this.clickHandler} />
                        </View>
                    </Col>
                </Row>
            )
        }
        return (
            <Container>

                <Content>
                    <Grid>
                        {events}
                    </Grid>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    paddedContainer: {
        padding: 5
    }
})

