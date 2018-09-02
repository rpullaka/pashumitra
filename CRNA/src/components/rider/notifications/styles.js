"use strict";
import commonColor from "../../../theme/variables/commonColor";
var React = require("react-native");
var {Dimensions} = React;

var deviceHeight = Dimensions.get("window").height;
export default {
  notCard: {
    height: deviceHeight / 4,
    width: null
  },
  iosHeader: {
    backgroundColor: "#fff"
  },
  aHeader: {
    backgroundColor: "#fff",
    borderColor: "#aaa",
    elevation: 3
  },
  iosHeaderText: {
    fontSize: 18,
    fontWeight: "500",
    color: commonColor.brandPrimary
  },
  aHeaderText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 26,
    marginTop: -5,
    color: commonColor.brandPrimary
  },
  container: {
    backgroundColor: commonColor.brandPrimary,
    padding: 20
  },
  contentHeading: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  shareText: {
    textAlign: "center",
    fontWeight: "600",
    padding: 20,
    flex: 1
  }
};
