import { Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const TextBox = ({ title }) => {
  return (
    <View>
      <Text style={styles.boxTitle}>{title}</Text>
    </View>
  )
}

const OverlayAndFilter = ({ boxTitle, data = [] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{boxTitle}</Text>
        <Pressable style={styles.crossIcon}><Entypo name="cross" size={26} color={"black"} /></Pressable>
      </View>
      {data.map((item, index) => (
        <TextBox key={index} title={item} />
      ))}
    </View>
  )
}

export default OverlayAndFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: "center",
    width: "80%",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "whitesmoke"//required update for bg color, it should be white
  },
  titlecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginHorizontal: -20,
    paddingBottom: 10
  },
  title: {
    color: "black",
    fontSize: 25,
    fontWeight: "700"
  },
  crossIcon: {
    borderColor: "#000",
    borderWidth: 3,
    padding: 0,
    alignSelf: "flex-start"
  },
  boxTitle: {
    backgroundColor: "#F3EDF7",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: "400",
    marginTop: 20,
    width: 180,
    paddingVertical: 5,
    color: "#1D1B20",
    paddingLeft: 15,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.8,
    borderRadius: 4
  }
})