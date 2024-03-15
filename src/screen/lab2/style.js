import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "90%",
    },

    headerStyle: {
        height: 100,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        height: 80, 
        width: 80, 
        borderRadius: 40, 
        marginBottom: 10
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});