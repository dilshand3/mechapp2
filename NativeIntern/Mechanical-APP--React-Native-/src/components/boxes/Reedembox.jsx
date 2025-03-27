import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Reedembox = ({ value }) => {
    return (
        <>
            <Text style={styles.container}>{value} pts</Text>
        </>
    );
};

export default Reedembox;

const styles = StyleSheet.create({
    container: {
        borderColor: "#000000",
        borderWidth: 1.6,
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderRadius: 5,
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 13
    },
});
