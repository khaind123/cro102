import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    label: {
        marginBottom: 8,
        color: 'blue',
        fontSize: 14,
        fontWeight: '500',
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
});