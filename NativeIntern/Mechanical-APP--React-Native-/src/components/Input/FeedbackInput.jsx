import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedbackInput = () => {
    const [feedback, setFeedback] = useState('');
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Additional Notes</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your feedback..."
                value={feedback}
                onChangeText={setFeedback}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
            />
            <Pressable style={styles.confirmbtn} onPress={() => navigation.navigate("PaymentSlip2")}><Text style={styles.btntxt}>Confirm Payment ₹5,400.00</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        marginTop: 20,
    },
    input: {
        borderWidth: 1.7,
        borderColor: '#6A6363',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        height: 100,
        backgroundColor: '#fff',
        width: "100%"
    },
    title: {
        color: "#6C7278",
        fontWeight: "600",
        marginBottom: 4,
        marginLeft: 3
    },
    confirmbtn: {
        backgroundColor: "#B71B36",
        borderRadius: 10,
        marginTop: 13
    },
    btntxt: {
        textAlign: "center",
        color: "white",
        paddingVertical: 15,
        fontWeight: "500",
    }
});

export default FeedbackInput;
