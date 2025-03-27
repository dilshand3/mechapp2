import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native'
import React from 'react';
import fotuneImg from "../assets/fortuneImg.png";
import FormInput from '../components/Input/FormInput';
import CheckBoxInput from '../components/Input/CheckBoxInput';
import FeedbackInput from '../components/Input/FeedbackInput';
import Entypo from "react-native-vector-icons/Entypo";

export const Heading2 = ({ title }) => {
  return (
    <View>
      <Text style={styles.heading2}>{title}</Text>
    </View>
  )
}

export const PriceValue = ({ txt, price }) => {
  return (
    <View style={priceValue.container}>
      <Text style={priceValue.txt}>{txt}</Text>
      <Text style={priceValue.txt}>₹{price}</Text>
    </View>
  )
}

export const pricevalueData = [{
  title: "Base Price (2 units)",
  price: "4,800.00"
},
{
  title: "Tax (10%)",
  price: "480.00"
},
{
  title: "Shipping Fee",
  price: "120.00"
},
{
  title: "Total Amount",
  price: "5,400.00"
}
]

export const PriceBreakdown = () => {
  return (
    <View>
      <Heading2 title={"Price Breakdown"} />
      {
        pricevalueData.map((val, index) => (
          <PriceValue key={index} txt={val.title} price={val.price} />
        ))
      }
    </View>
  )
}

const PaymentSlip = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productDetail}>
        <Image source={fotuneImg} style={styles.img} />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.name}>Industrial Hydraulic Pump XH--2000</Text>
          <Text style={styles.model}>Model: HP-2024-XH2000</Text>
          <Text>Quantity: 2 units</Text>
        </View>
      </View>
      <PriceBreakdown />
      <Heading2 title={"Customer information"} />
      <FormInput placeholder={"Company name"} label={"Company name"} />
      <FormInput placeholder={"Contact Person"} label={"Contact Person"} />
      <FormInput placeholder={"Address"} label={"Billing Address"} />
      <FormInput placeholder={"Mobile No."} label={"Mobile No."} />
      <Heading2 title={"Payment method"} />
      <CheckBoxInput title={"Bank Transfer"} />
      <CheckBoxInput title={"Credit Card"} />
      <CheckBoxInput title={"Purchase Order"} />
      <FeedbackInput />
      <View style={styles.bottombtn}>
        <View style={styles.btn}>
          <Entypo name="download" />
          <Text style={styles.btntxt}>download</Text>
        </View>
        <View style={styles.btn}>
          <Entypo name="share" />
          <Text style={styles.btntxt}>Share</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default PaymentSlip;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white"
  },
  productDetail: {
    flexDirection: "row",
    width: "100%",
    margin: "auto",
    marginTop: "10%",
    marginBottom: "13%",
  },
  img: {
    width: "37%",
    resizeMode: "contain",
    height: "150%"
  },
  name: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
    flexWrap: "wrap",
    width: "100%"
  },
  model: {
    color: "#6B7280",
    fontWeight: "400",
    fontSize: 16
  },
  quantity: {
    color: "#6B7280",
    fontWeight: "500",
    fontSize: 15
  },
  heading2: {
    fontWeight: "500",
    color: "#000000",
    fontSize: 20,
    marginTop: 20
  },
  bottombtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    marginBottom: 20
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  btntxt: {
    fontWeight: "500"
  }
})

const priceValue = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txt: {
    color: "#263238",
    fontWeight: "500",
    marginTop: 15
  }
})