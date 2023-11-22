import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  cardContainer: {
    padding: 15,
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#785531",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
})  