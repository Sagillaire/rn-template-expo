import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#6F1E51',
    },
    btnText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
    },
});