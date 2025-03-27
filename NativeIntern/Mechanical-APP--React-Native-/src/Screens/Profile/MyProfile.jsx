import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const userInformation = {
  Image: require("../../assets/avatar.jpeg"),
  Name: 'Nitish Tiwari',
  Phone: '879-458-1883',
  Address: 'New Delhi',
};

const MyProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <View style={styles.line} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
      </View>
      <View style={styles.baseline} />

      <View style={styles.userInformationContainer}>
        <Image style={styles.profileImage} source={userInformation.Image} />
        <View style={styles.userInformation}>
          <Text style={styles.profileName}>{userInformation.Name}</Text>
          <Text style={styles.profileAddress}>{userInformation.Address}</Text>
          <Text style={styles.profilePhone}>{userInformation.Phone}</Text>
        </View>
      </View>

      {/* Contents */}
      <View style={styles.optionsContainer}>
        {/* Edit Profile */}
        <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("EditProfile")}>
          <AntDesign name="edit" size={20} color="#E91E63" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Refer & Earn */}
        <TouchableOpacity
          style={styles.optionBox}
          onPress={() => navigation.navigate('referNwin')}>
          <FontAwesome5 name="gift" size={20} color="#E91E63" />
          <Text style={styles.optionText}>Refer & Earn</Text>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity
          style={styles.optionBox}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <MaterialIcons name="privacy-tip" size={20} color="#E91E63" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        {/* About Us */}
        <TouchableOpacity
          style={styles.optionBox}
          onPress={() => navigation.navigate('AboutUs')}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#E91E63"
          />
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>

        {/* Contact Us */}
        <TouchableOpacity style={styles.optionBox}>
          <FontAwesome5 name="whatsapp" size={20} color="#4CAF50" />
          <Text style={styles.optionText}>Contact Us</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.optionBox}>
          <MaterialIcons name="logout" size={20} color="#F44336" />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginTop: 60,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  baseline: {
    borderBottomWidth: 1.5,
    borderColor: '#D3D3D3',
    marginTop: 13,
  },
  userInformationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  userInformation: {
    marginHorizontal: 30,
    flex: 1,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileAddress: {
    fontSize: 15,
    color: '#555',
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 15,
    color: '#555',
  },
  optionsContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  optionBox: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
    fontWeight: '500',
  },
});