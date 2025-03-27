import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react';
import { Heading } from './AllPayment';
import OrderDetailHistory from '../components/History/OrderDetailHistory';

const OrderHistory = () => {
    const OrderHistoryData = [
        {
            title: "ORD-2024-0123",
            price: "1250",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "CNC Machine Parts"
        },
        {
            title: "ORD-2024-0125",
            price: "2880",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System"
        },
        {
            title: "ORD-2024-0123",
            price: "3425",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "Control Cable"
        },
        {
            title: "ORD-2024-0123",
            price: "1250",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "Motor"
        },
        {
            title: "ORD-2024-0125",
            price: "1467",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System"
        },
        {
            title: "ORD-2024-0125",
            price: "1145",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Engine Oil"
        }
    ];

    return (
        <ScrollView style={styles.container}>
            <Heading title={"Order history"} />
            <View style={styles.OrderDetailHistoryContainer}>
                {
                    OrderHistoryData.map((val, index) => {
                        return <OrderDetailHistory key={index} title={val.title} price={val.price} date={val.date} status={val.status} companyName={val.companyName} />
                    })
                }
            </View>
        </ScrollView>
    )
}

export default OrderHistory;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: "white"
    },
    OrderDetailHistoryContainer: {
        backgroundColor: "white",
        marginTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        paddingVertical: 25,
        elevation: 4,
        gap: 25,
    },
})