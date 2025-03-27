import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckBoxInput = ({ title }) => {
    const [checked, setChecked] = useState(false);

    return (
        <Pressable onPress={() => setChecked(!checked)} style={styles.container}>
            <View style={[styles.checkbox, checked && styles.checked]}>
                {checked && <AntDesign name="check" size={18} color="#2C3E50" />}
            </View>
            <Text style={styles.label}>{title}</Text>
        </Pressable>
    );
};

export default CheckBoxInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent',
        borderWidth: 1.7,
        borderColor: '#6A6363',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#2C3E50',
        marginTop: 10
    },
    checkbox: {
        width: 23,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#2C3E50',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    label: {
        fontSize: 16,
    },
});
