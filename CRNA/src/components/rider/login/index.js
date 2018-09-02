"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Platform } from "react-native";
import { Actions } from "react-native-router-flux";
import { Content, Text, Button, Icon } from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import commonColor from "../../../theme/variables/commonColor";
import styles from "./styles";

class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content style={{ backgroundColor: commonColor.brandPrimary }}>
          <View
            style={
              Platform.OS === "ios"
                ? styles.iosLogoContainer
                : styles.aLogoContainer
            }
          >
            <Icon name="ios-car" style={styles.logoIcon} />
            <Text style={styles.logoText}>Taxi App</Text>
          </View>
        </Content>
        <View style={{ padding: 10, marginBottom: 60 }}>
          <Grid>
            <Col style={{ padding: 10 }}>
              <Button
                onPress={() => Actions.signIn()}
                transparent
                block
                style={styles.loginBtn}
              >
                <Text style={{ color: commonColor.brandPrimary, fontWeight: "600" }}>
                  SIGN IN
                </Text>
              </Button>
            </Col>
            <Col style={{ padding: 10 }}>
              <Button
                onPress={() => Actions.register()}
                block
                style={styles.registerBtn}
              >
                <Text style={{ fontWeight: "600", color: "#fff" }}>
                  REGISTER
                </Text>
              </Button>
            </Col>
          </Grid>
        </View>
      </View>
    );
  }
}

export default connect()(Login);
