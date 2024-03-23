import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    container2: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box: {
        width: 120,
        height: 120,
        backgroundColor: "blue",
        borderRadius: 20,
        marginVertical: 50
    },

    data: {
        height: 100,
        backgroundColor: 'blue',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    sub: {
        color: 'white',
        fontWeight: 'bold'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingTop: 25,
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
});