//@ts-check
//so far so good
/**
 * @author Pranay Gupta
 * @created 10 Nov 2019
 * @description Home screen for events
 */

import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Body } from 'native-base';

export default function ClickableModuleCard(props) {

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { props.onPress(props.module) }}
            >
                <Card>
                    <CardItem header bordered>
                        <Text>{props.module.name}</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>

                            <Text>Something about this event</Text>
                        </Body>
                    </CardItem>
                </Card>

            </TouchableOpacity>

        </View>
    )
}

