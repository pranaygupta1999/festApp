import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Card, View, CardItem, Body } from "native-base"

export default function EventCards(props) {


    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { props.onPress(props.event) }}
            >
                <Card>
                    <CardItem header bordered>
                        <Text>{props.event.name}</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>

                            <Text>{"Team Size: " + props.event.teamSize} </Text>
                            <Text>{"Fee: " + props.event.fee} </Text>
                        </Body>
                    </CardItem>
                </Card>

            </TouchableOpacity>

        </View>
    )

}