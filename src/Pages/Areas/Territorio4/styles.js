import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window");
export default StyleSheet.create({
  container: {

    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#1D1D1D",
  },
  card:{
    width: "100%", 
    height: 130,
    marginTop: 20,
    padding: 10,
    marginBottom: 30, 
    borderRadius: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    justifyContent: "center",
  },
  


  cardContainerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    
  },

  cardImage: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
    borderRadius: 5,
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor do overlay (preto com 50% de opacidade)
      },
  },
  cardTitle: {
    fontSize: 16,
    color: "#f9f9f9",
    textAlign: "right",
    fontFamily: 'Poppins',
    marginTop: -38,
    marginRight: 10,
  },

  cardImageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor da camada de sombra
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro com transparência
  },
  modalContent: {
    backgroundColor: '#1D1D1D',
    padding: 20,
    color: '#f9f9f9',
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 14,
    color: '#f9f9f9',
    textAlign: 'justify',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: '#f9f9f9',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'transparent',
    padding: 10, 
    borderRadius: 5, 
    alignSelf: 'center',
    marginTop: 20, 
  },

  buttonText: {
    color: '#73ac31',
    fontFamily: 'Poppins', 
    textAlign: 'center', 
  }
})  