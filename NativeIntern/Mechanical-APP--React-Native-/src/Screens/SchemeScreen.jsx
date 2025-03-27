import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import FormInput from '../components/Input/FormInput';
import Reedembox from '../components/boxes/Reedembox';
import RedeemHistory from '../components/History/RedeemHistory';

const SchemeScreen = () => {
    const redeemBoxValue = [100, 500, 1000, 1500]
    const recentHistoryData = [{
        title: "Added Points",
        date: "Dec 15, 2023 14:30",
        points: "500",
        rupees: "₹50.00",
        loss: false
    },
    {
        title: "Redeemed",
        date: "Dec 12, 2023 09:15",
        points: "200",
        rupees: "₹20.00",
        loss: true
    },
    {
        title: "Bonus Points",
        date: "Dec 15, 2023 14:30",
        points: "1000",
        rupees: "₹20.00",
        loss: false
    }]
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headercontainer}>
                <Text style={[styles.headerTxt, styles.title]}>Points Balance</Text>
                <View style={{ marginTop: 20 }}>
                    <Text style={[styles.headerTxt, styles.title2]}>2,450</Text>
                    <Text style={[styles.headerTxt]}>Available Points</Text>
                    <Text style={[styles.headerTxt]}>(100 points = 10 Rs)</Text>
                </View>
            </View>
            <Text style={styles.middleHeading}>Add Points</Text>
            <FormInput inputName={"points"} placeholder={"Enter Points"} bottomLabel={"You will receive ₹0.00"} addbtn={true} />
            <View style={styles.redeem}>
                <Text style={styles.middleHeading}>Quick Reedem</Text>
                <View style={styles.redeembox}>
                    {redeemBoxValue.map((val, index) => {
                        return <Reedembox key={index} value={val} />
                    })}
                </View>
                <FormInput inputName={"amount"} placeholder={"Custom Amount"} reedembtn={true} />
            </View>
            <View>
                <Text style={[styles.middleHeading, { marginLeft: 0 }]}>Recent History</Text>
                {
                    recentHistoryData.map((val, index) => (
                        <RedeemHistory key={index} title={val.title} points={val.points} loss={val.loss} date={val.date} rupees={val.rupees} />
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default SchemeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 13,
        paddingVertical: 13,
    },
    headercontainer: {
        backgroundColor: "#B71B36",
        marginHorizontal: -20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    headerTxt: {
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "left",
        marginLeft: 4
    },
    title2: {
        fontSize: 32
    },
    middleHeading: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 15,
        marginLeft: 5
    },
    redeem: {
        marginTop: 10
    },
    redeembox: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})