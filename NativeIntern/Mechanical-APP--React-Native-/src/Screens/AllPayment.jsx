import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import OrderDetailHistory from '../components/History/OrderDetailHistory';
import PaymentSlipBox from '../components/boxes/PaymentSlipBox';

const PaymentOverViewBox = ({ title, price, boxBgColor, TextColor, borderColor }) => {
    return (
        <View style={[styles.paymentbox, { backgroundColor: boxBgColor, borderColor: borderColor, borderWidth: 0.9 }]}>
            <Text style={[styles.overViewTitle, { color: TextColor }]}>{title}</Text>
            <Text style={styles.overViewPaid}>{price}</Text>
        </View>
    )
}

export const Heading = ({ title }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#000" }}>{title}</Text>
            <Text style={{ fontSize: 18, textDecorationLine: "underline", color: "#B71B36" }}>View All</Text>
        </View>
    )
}


const AllPaymentData = [
    {
        title: "#ORD-2024-0123",
        price: "₹1250",
        date: "Jan 23, 2024",
        status: "Completed",
        companyName: "CNC Machine Parts"
    },
    {
        title: "#ORD-2024-0125",
        price: "₹2880",
        date: "Jan 23, 2024",
        status: "Pending",
        companyName: "Hydraulic System",
    }
]

const paymentSlipData = [
    {
        title: "Invoice #2401",
        date: "Jan 26, 2025"
    },
    {
        title: "Invoice #2400",
        date: "Jan 24, 2025"
    },
    {
        title: "Invoice #2398",
        date: "Jan 23, 2025"
    }
]

const AllPayment = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.paymentContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 17, marginBottom: 10 }}>
                    <Text style={styles.overViewBoxHeading}>Payment Overview</Text>
                    <Text style={styles.overViewBoxHeading2}>Last 30 <Entypo name="chevron-small-down" size={28} /> </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <PaymentOverViewBox title={"Paid"} price={"₹24,580"} boxBgColor={"#e8f8f5"} TextColor={"#16A34A"} />
                    <PaymentOverViewBox title={"Outstanding"} price={"₹12,320"} boxBgColor={"#fdedec"} TextColor={"red"} borderColor={"red"} />
                </View>
            </View>

            <Heading title={"Order history"} />
            <View style={styles.OrderDetailHistoryContainer}>
                {AllPaymentData.map((val, index) => (
                    <OrderDetailHistory key={index} title={val.title} price={val.price} date={val.date} status={val.status} companyName={val.companyName} />
                ))}
            </View>
            <Heading title={"Payment History"} />
            <View style={styles.OrderDetailHistoryContainer}>
                <OrderDetailHistory title={'Order #MH7829'} price={"₹1250"} date={"Jan 23, 2024"} companyName={"Industrial Bearing Set"} paymentStatus={"Payment Completed"} />
            </View>
            <View style={styles.OrderDetailHistoryContainer}>
                <OrderDetailHistory title={'Order #MH7830'} price={"₹3425"} date={"Dec 14, 2024"} companyName={"Control Cable"} paymentStatus={"Outstanding Payment"} />
            </View>
            <Heading title={"Payment Slip"} />
            <View style={styles.slipContainer}>
                {
                    paymentSlipData.map((val, index) => (
                        <PaymentSlipBox key={index} title={val.title} date={val.date} />
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default AllPayment;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 13,
        paddingRight: 13,
        paddingVertical: 4,
        backgroundColor: "white",
        flex: 1,
    },
    paymentbox: {
        borderColor: "green",
        borderWidth: 0.8,
        alignSelf: "flex-start",
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: "40%",
    },
    overViewTitle: {
        fontSize: 18,
        fontWeight: "400"
    },
    overViewPaid: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 5,
    },
    paymentContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingVertical: 25,
        marginTop: 15
    },
    overViewBoxHeading: {
        fontSize: 20,
        fontWeight: "600"
    },
    overViewBoxHeading2: {
        color: "#263238",
        fontSize: 18,
        marginBottom: 2,
        marginTop: -3
    },
    OrderDetailHistoryContainer: {
        backgroundColor: "white",
        marginTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        paddingVertical: 15,
        elevation: 4,
        gap: 20,
    },
    slipContainer: {
        flexDirection: "row",
        gap: 5
    }
})