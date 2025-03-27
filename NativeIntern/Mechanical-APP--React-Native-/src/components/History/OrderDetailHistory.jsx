import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

const OrderDetailHistory = ({ title, price, date, status, companyName, paymentStatus }) => {
    return (
        <View >
            <View style={styles.title}>
                <Text style={styles.titleTxt}>{title}</Text>
                <Text style={styles.titleTxt}>{price}</Text>
            </View>
            <View style={styles.dateStatusContainer}>
                <Text style={styles.date}>{date}</Text>
                {status && <Text style={status == "Pending" ? styles.statusyellow : styles.statusgreen}>{status}</Text>}
            </View>
            <Text style={styles.companyName}>{companyName}</Text>
            {paymentStatus && (
                <View style={styles.paymentStatus}>
                    <AntDesign
                        name="checkcircle"
                        color={paymentStatus === "Outstanding Payment" ? "#C57922" : "#22C55E"}
                    />
                    <Text
                        style={[
                            styles.paymentStatusTxt,
                            { color: paymentStatus === "Outstanding Payment" ? "#C57922" : "#22C55E" }
                        ]}
                    >
                        {paymentStatus}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default OrderDetailHistory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        paddingVertical: 10,
        elevation: 4
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleTxt: {
        fontSize: 18,
        color: "#263238",
        fontWeight: '500'
    },
    dateStatusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        alignItems: "center"
    },
    date: {
        color: "#6B7280",
        fontWeight: '400',
        fontSize: 15
    },
    statusgreen: {
        color: "#15803D",
        backgroundColor: "#DCFCE7",
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 18
    },
    statusyellow: {
        backgroundColor: "#FEF9C3",
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 18
    },
    companyName: {
        color: "#263238",
        fontWeight: "400",
        fontSize: 16
    },
    paymentStatus: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    paymentStatusTxt: {
        color: "#22C55E",
        fontWeight: "500",
    }
})