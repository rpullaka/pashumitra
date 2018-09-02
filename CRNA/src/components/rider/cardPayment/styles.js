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
  cardSelect: {
    margin: 20,
    marginLeft: 20,
    padding: 10,
    marginTop: 0,
    paddingLeft: 0
  },
  payCard: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: -10,
    borderBottomWidth: 1
  },
  paytmIcon: {
    width: 35,
    height: 13,
    padding: 5,
    paddingTop: 15
  }
};
