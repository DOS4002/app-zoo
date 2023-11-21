import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: -70
  },
  title: {
    marginTop: -60,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 13,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    
    color: '#fff',
    fontFamily: 'Poppins',
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    color: "#fff",
    fontFamily: 'Poppins',
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#73ac31',
    padding: 10,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
    marginBottom: 15,
  },
  button1: {
    backgroundColor: '#785533',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerText: {
    fontFamily: 'Poppins',
    color: '#95a5a6',
    textDecorationLine: 'underline',
  },

  link: {
    color: "white",
    textDecorationLine: "underline",
  },
     
  noAccount: {
    padding: 5,
    fontSize: 10,
    color: "#fff",
    fontFamily: 'Poppins',
    alignSelf: "flex-start",
    marginBottom: 5,
  },
})  