import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {

  const [formData, setFormData] = useState({
    userId: 'ID#5826',
    fullName: 'Your full name ',
    address: 'Your address',
    gender: 'M /F/Other ',
    phoneNumber: '+91 000000000',
    email: 'example@gmail.com',
    bio: 'Write about yourself'
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
          <Text style={styles.headerText}>Privacy Policy</Text>
        </View>
      </View>
      <View style={styles.baseline} />

      <View style={styles.imageuploadcontainer}>
        <Image
          style={styles.image}
          source={require('../../assets/avatar.jpeg')}
        />
        <TouchableOpacity style={styles.uploadconatiner}>
          <AntDesign name="upload" size={20} />
          <Text style={styles.uploadtext}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      {/* Other Information */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          {/* User ID */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>User ID</Text>
            <TextInput
              style={styles.input}
              value={formData.userId}
              onChangeText={(text) => handleChange('userId', text)}
            //   editable={false}
            />
          </View>

          {/* Full Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(text) => handleChange('fullName', text)}
            />
          </View>

          {/* Address */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              value={formData.address}
              onChangeText={(text) => handleChange('address', text)}
            />
          </View>

          {/* Gender */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              value={formData.gender}
              onChangeText={(text) => handleChange('gender', text)}
            />
          </View>

          {/* Phone Number */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={formData.phoneNumber}
              onChangeText={(text) => handleChange('phoneNumber', text)}
              keyboardType="phone-pad"
            />
          </View>

          {/* Email */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Bio */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.input}
              value={formData.bio}
              onChangeText={(text) => handleChange('bio', text)}
              placeholder="Enter Your Bio"
              multiline
            />
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>


    </View>
  );
};

export default EditProfile;

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
  imageuploadcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 10,
  },
  uploadconatiner: {
    flexDirection: 'row',
    backgroundColor: '#CECECE',
    width: "40%",
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10

  },
  uploadtext: {
    marginHorizontal: 10,
    fontWeight: 500,
    fontSize: 15,
  }, scrollView: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#C41E3A',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 16,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
