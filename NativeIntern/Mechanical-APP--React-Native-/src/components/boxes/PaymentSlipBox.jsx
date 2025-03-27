import { StyleSheet, Text, View, Pressable } from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Feather from "react-native-vector-icons/Feather";

const PaymentSlipBox = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <FontAwesome6 name="file-pdf" color="red" size={18} />
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Pressable style={styles.downloadbtn}>
        <Feather name="download" color="white" />
        <Text style={styles.downloadbtntxt}>Download</Text>
      </Pressable>
    </View>
  )
}

export default PaymentSlipBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 5,
    borderColor: "#000",
    borderWidth: 0.2,
    borderRadius: 8,
    marginBottom: 30
  },
  downloadbtn: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#B71B36",
    width: 100,
    justifyContent: "center",
    borderRadius: 4,
    gap: 2
  },
  downloadbtntxt: {
    color: "white",
  }
})