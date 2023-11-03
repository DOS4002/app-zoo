import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        fontFamily: 'Poppins',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(24, 24, 24, 0.6)",
    },
    content:{
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "90%",
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitile:{
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 10,
        padding: 10,
    },
    buttom:{
        top: 7,
        backgroundColor: '#73ac31',
        padding: 10,
        borderRadius: 25,
        width: '40%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

})