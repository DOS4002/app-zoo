import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  label: {
    
    fontFamily: 'Poppins',
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  label5: {
    fontFamily: 'Poppins',
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    
    fontFamily: 'Poppins',
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#785533",
    padding: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
})