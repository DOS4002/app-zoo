import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "5%", // Use porcentagem para tornar o preenchimento responsivo
        backgroundColor: "#73ac31",
      },
      image: {
        width: "50%", // Use porcentagem para dimensionar a imagem responsivamente
        aspectRatio: 1, // Mantenha a proporção da imagem
      },
      label: {
        marginLeft: "-80%",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
        color: "#fff",
      },
      label5: {
        marginLeft: "-44%",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
        color: "#fff",
      },
      input: {
        opacity: 5,
        fontWeight: "bold",
        borderRadius: 10,
        color: "white",
        width: "100%", // Use porcentagem para dimensionar a largura do campo de entrada responsivamente
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: "transparent",
      },
      button: {
        backgroundColor: "#785533",
        width: 170,
        borderRadius: 10,
        width: "50%", // Use porcentagem para dimensionar a largura do botão responsivamente
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
        fontSize: 14,
        fontWeight: "bold",
        color: "#73ac31",
        textAlign: "center",
      },
})