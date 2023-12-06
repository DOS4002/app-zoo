import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#1D1D1D",
  },
  card:{
    width: "50%", 
    height: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    justifyContent: "center",
  },  

  cardContainerGrid: {
    marginTop: -5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    
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
    fontSize: 13,
    color: "#f9f9f9",
    textAlign: "left",
    marginTop: -26,
    marginLeft: 10,
    fontFamily: 'Poppins',
  },

  cardImageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor da camada de sombra
  },
})  