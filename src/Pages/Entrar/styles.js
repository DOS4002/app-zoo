import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#73ac31",
      },
      image: {
        width: 200,
        height: 200,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#fff",
      },
      label: {
        fontSize: 18,
        marginBottom: 8,
        color: "#fff",
      },
      input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
      },
      button: {
        backgroundColor: "#785533",
        borderRadius: 10,
        width: "100%",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
      },
      cadastroButton: {
        marginTop: 10,
      },
      cadastroButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        textDecorationLine: "underline",
      },


})