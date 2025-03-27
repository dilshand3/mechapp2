import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Heading } from './AllPayment';
import OrderDetailHistory from '../components/History/OrderDetailHistory';

const PaymentHistory = () => {
    const OrderHistoryData = [
        {
            title: "ORD-2024-0123",
            price: "1250",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "CNC Machine Parts",
            paymentStatus: "Payment Completed"
        },
        {
            title: "ORD-2024-0125",
            price: "2880",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System",
            paymentStatus: "Outstanding Payment"
        },
        {
            title: "ORD-2024-0123",
            price: "3425",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "Control Cable",
            paymentStatus: "Outstanding Payment"
        },
        {
            title: "ORD-2024-0123",
            price: "1250",
            date: "Jan 23, 2024",
            status: "Completed",
            companyName: "Motor",
            paymentStatus: "Payment Completed"
        },
        {
            title: "ORD-2024-0125",
            price: "1467",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System",
            paymentStatus: "Outstanding Payment"
        },
        {
            title: "ORD-2024-0125",
            price: "1467",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System",
            paymentStatus: "Outstanding Payment"
        }, {
            title: "ORD-2024-0125",
            price: "1467",
            date: "Jan 23, 2024",
            status: "Pending",
            companyName: "Hydraulic System",
            paymentStatus: "Outstanding Payment"
        }
    ];
    return (
        <ScrollView style={styles.container}>
            <Heading title={"Payment History"} />
            {
                OrderHistoryData.map((val, index) => (
                    <View style={styles.OrderDetailHistoryContainer}>
                        <OrderDetailHistory key={index} title={val.title} price={val.price} date={val.date} status={val.status} companyName={val.companyName} paymentStatus={val.paymentStatus} />
                    </View>
                ))
            }
        </ScrollView>
    )
}

export default PaymentHistory;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        backgroundColor: "white",
    },
    OrderDetailHistoryContainer: {
        backgroundColor: "white",
        marginTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        paddingVertical: 15,
        elevation: 4,
        gap: 20,
        marginBottom: 30
    },
})