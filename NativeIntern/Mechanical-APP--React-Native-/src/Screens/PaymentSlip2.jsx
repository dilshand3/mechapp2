import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { PriceBreakdown } from './PaymentSlip';

const PaymentSlip2 = () => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.companyDetail}>
        <Text style={styles.companyname}>Industrial Hydraulic Pump XH- 2000</Text>
        <Text style={styles.model}>Model: HP-2024-XH2000</Text>
        <Text style={styles.quantity}>Quantity: 2 units</Text>
      </View>
      <PriceBreakdown />
    </ScrollView>
  )
}

export default PaymentSlip2;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: "white"
  },
  bottombtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    marginTop: 20
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  btntxt: {
    fontWeight: "500"
  },
  companyDetail: {
    marginTop: 30
  },
  companyname: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 16
  },
  model: {
    color: "#6B7280",
    fontWeight: "400"
  },
  quantity: {
    color: "quantity",
    fontWeight: '400',
    fontSize: 15
  }
})