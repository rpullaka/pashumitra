"use strict";
import commonColor from "../../../theme/variables/commonColor";

export default {


  iosHeader: {
    backgroundColor: "#fff"
  },
  aHeader: {
    backgroundColor: "#fff",
    borderColor: "#aaa",
    elevation: 3
  },
  iosHeaderTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: commonColor.brandPrimary
  },
  aHeaderTitle: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 26,
    marginTop: -5,
    color: commonColor.brandPrimary
  },
  profileIcon: {
    alignSelf: "center",
    padding: 10,
    fontSize: 50
  },
  inputContainer: {
    borderWidth: null,
    paddingBottom: 0,
    paddingTop: 0,
    margin: null,
  },
  input: {
    paddingBottom: 0,
    flex: 2,
  },
  blueBorder: {
    borderBottomWidth: 1,
    borderBottomColor:commonColor.lightThemePlaceholder ,
    paddingBottom: 0,
    marginHorizontal:10

  },
  blueHeader:{
    padding: 5,
    marginLeft: -10,
    color: commonColor.lightThemePlaceholder,

  },

};
