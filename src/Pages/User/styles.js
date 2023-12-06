import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1D1D1D',
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
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    
    fontFamily: 'Poppins',
    height: 40,
    color: "#fff",
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    alignSelf: "flex-start",
    color: "#fff",
    marginBottom: 5,
  },
  buttons: {
    padding: 10,
    borderRadius: 25,
    width: '40%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  btYes: {
    backgroundColor: '#73ac31',
    marginRight: 10,
    padding: 10, 
    border radius: 25, 
    
  },
  btNo: {
    backgroundColor: '#84401d',
    padding: 10, 
    border radius: 25,
  },
  button1: {
    backgroundColor: '#73ac31',
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