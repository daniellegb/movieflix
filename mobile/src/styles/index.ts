import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const colors = {
    white: "#FFFFFF",
    darkGrey: "#525252",
    mediumGrey: "#6C6C6C",
    lightGrey: "#9E9E9E",
    yellow: "#FFC700",
    black: "#000000",
}

const text = StyleSheet.create ({
    bold: {
        fontWeight: "700",
    },
    normal: {
        fontWeight: "400",
    },
    loginText: {
        fontSize: 36,
        fontWeight: "normal",
        color: colors.white,
        textTransform: "uppercase",
    },
    loginTextButton: {
        alignItems: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
    },
    movieCardTextTitle:{
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold"
    },
    movieCardTextYear:{
        fontSize: 16,
        color: colors.yellow,
        fontWeight: "bold"
    },
    movieCardTextSubTitle:{
        fontSize: 14,
        color: colors.white,
        fontWeight: "normal"
    }
}
,)

const theme = StyleSheet.create({
    nav: {
        backgroundColor: colors.yellow,
        alignItems: "center",
    },
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.darkGrey,
    },

    card: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.mediumGrey,
        borderRadius: 4,
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height:2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    primaryButton: {
        backgroundColor: colors.yellow,
        width: 280,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },

    arrowContainer: {
        margin: 50,
    },

    scrollContainer: {
        padding: 15,
        backgroundColor: colors.darkGrey,
    },
    movieCard:{
        backgroundColor: colors.mediumGrey,
        justifyContent: "space-around",
        margin: 20,
    },
    imgCard: {
        marginTop: 20,
        width: "100%",
        height: 180
    },
    form: {
    },
    textInput: {
        backgroundColor: colors.white,
        width: 270,
        height: 50,
        margin: 20,
        padding: 15,
        borderRadius: 4,
    },
    passwordContainer: {

    },
    toggle: {
        
    }

})

export { colors, theme, text };