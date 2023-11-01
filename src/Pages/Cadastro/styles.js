import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#73ac31",
  },
  containerHeader: {
    marginBottom: '8%',
    marginTop: '14%',
    paddingStart: '5%',
    backgroundColor: "#73ac31",
  },
  title:{
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },
  containerForm: {
    flex: 1,
    paddingStart: '5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingEnd: '5%',
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 13,
    marginTop: 20,

  },

  input: {
    
    fontFamily: 'Poppins',
    height: 35,
    width: "100%",
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
  button: {
    marginLeft: "15%",
    alignItems: "center",
    backgroundColor: "#785533",
    padding: 10,
    borderRadius: 25,
    width: "70%",
    marginTop: 50,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});