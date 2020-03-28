//@ts-check
//so far so good
/**
 * @author Pranay Gupta
 * @created 10 Nov 2019
 * @description Home screen for events
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Content, Row, Col, Grid, Container, Header, Body, Left, Right, Icon, Button, Title } from "native-base";
import ClickableCard from '../../components/Events/ClickableModuleCards'
import ModulesList from "./eventlist";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class EventsHome extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate;
    }
    /**
     * @param {{ name: any; }} module
     */
    clickHandler = (module) => {
        this.props.navigation.navigate('ListOfEvents', module);
        console.log(this.navigate);
        console.log(module.name);
    }
    render() {

        const modules = [];
        for (let i = 0; i < ModulesList.length; i += 2) {
            if (i + 1 < ModulesList.length) {
                const element1 = ModulesList[i];
                const element2 = ModulesList[i + 1];
                modules.push(
                    <Row key={i}>
                        <Col>
                            <View style={styles.paddedContainer}>
                                <ClickableCard module={element1} onPress={this.clickHandler} />
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.paddedContainer}>
                                <ClickableCard module={element2} onPress={this.clickHandler} />
                            </View>
                        </Col>
                    </Row>
                )
            }
            else {
                const element1 = ModulesList[i];
                <Row key={i}>
                    <Col>
                        <View style={styles.paddedContainer}>
                            <ClickableCard module={element1} onPress={this.clickHandler} />
                        </View>
                    </Col>
                </Row>
            }

        }
        return (


            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="menu" />
                        </Button>

                    </Left>
                    <Body>
                        <Title>All Modules</Title>
                    </Body>
                    <Right />
                </Header>
                
                    <Content>
                        <Grid>
                            {modules}
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
