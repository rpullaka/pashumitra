"use strict";
import commonColor from "../../../theme/variables/commonColor";
var React = require("react-native");
var { Dimensions } = React;

var deviceHeight = Dimensions.get("window").height;
export default {
  iosLogoContainer: {
    top: deviceHeight / 2.6,
    alignItems: "center"
  },
  aLogoContainer: {
    top: deviceHeight / 3,
    alignItems: "center",
    height: deviceHeight / 1.5
  },
  logoIcon: {
    color: "#eee",
    fontSize: 100
  },
  logoText: {
    color: "#eee",
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 30,
    marginTop: -10
  },
  loginBtn: {
    borderRadius: 0,
    borderWidth: 2,
    borderColor: commonColor.brandPrimary,
    alignItems: "center",
    justifyContent: "center"
  },
  registerBtn: {
    borderRadius: 0,
    backgroundColor: commonColor.brandPrimary,
    alignItems: "center",
    justifyContent: "center"
  }
};
