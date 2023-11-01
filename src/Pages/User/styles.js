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
  button: {
    backgroundColor: '#73ac31',
    padding: 15,
    borderRadius: 25,
    width: '100%',
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
    fontSize: 16,
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

     
})