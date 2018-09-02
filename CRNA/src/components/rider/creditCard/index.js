"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { View,Platform } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Text, Button, Icon, Item, Input, Title, Left, Right, Body } from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import commonColor from "../../../theme/variables/commonColor";
import styles from "./styles";

class CreditCard extends Component {

    constructor(props){
    super(props);
    this.state = {
      cca2: "AI"
    };
    }

    render() {
        return (
                <Container style={{backgroundColor: "#fff"}} >
                    <Header androidStatusBarColor={commonColor.statusBarLight} style={Platform.OS === "ios" ? styles.iosHeader : styles.aHeader }>
                        <Left><Button transparent onPress={() => Actions.pop()} >
                            <Icon name="md-arrow-back" style={{fontSize: 28,color: commonColor.brandPrimary }} />
                        </Button></Left>
                        <Body><Title style={Platform.OS === "ios" ? styles.iosHeaderTitle : styles.aHeaderTitle }>Add Payment</Title></Body><Right/>

                    </Header>
                    <Content style={{padding: 20}}>
                        <View>
                            <Item>
                                <Icon name="ios-card" />
                                <Input placeholder="Credit Card Number" keyboardType="numeric" placeholderTextColor={commonColor.lightThemePlaceholder} />
                            </Item>
                        </View>
                            <Grid style={{paddingVertical: 10}}>
                                <Col style={styles.payCardInput}>
                                    <Item>
                                        <Input placeholder="MM" keyboardType="numeric" placeholderTextColor={commonColor.lightThemePlaceholder} />
                                    </Item>
                                </Col>
                                <Col style={styles.payCardInput}>
                                    <Item>
                                        <Input placeholder="YY" keyboardType="numeric" placeholderTextColor={commonColor.lightThemePlaceholder} />
                                    </Item>
                                </Col>
                                <Col style={{flex: 4}}>
                                    <Item>
                                        <Input placeholder="CVV" keyboardType="numeric" placeholderTextColor={commonColor.lightThemePlaceholder} />
                                    </Item>
                                </Col>
                            </Grid>

                            <Button block>
                            <Text style={{color: "#fff",fontWeight: "600"}}>ADD PAYMENT</Text>
                            </Button>
                    </Content>
                </Container>
        );
    }
}

export default connect()(CreditCard);
