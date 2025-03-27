import { StyleSheet, Text, TextInput, View, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';

const FormInput = ({ placeholder, onChangeText, bottomLabel, addbtn, reedembtn, inputName, label }) => {
  const [text, setText] = useState('');

  // Function to show alert
  const handleSubmit = (type) => {
    if (!text.trim()) {
      Alert.alert("Error", `Please enter a value for ${inputName}!`);
      return;
    }

    Alert.alert(type, `${inputName}: ${text}`);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.topLabel}>{label}</Text>}
      <View style={[styles.inputWrapper, addbtn && styles.withButton]}>
        <TextInput
          style={[styles.input, addbtn ? styles.inputWithButton : styles.fullWidthInput]}
          placeholder={placeholder}
          placeholderTextColor="#6A6363"
          value={text}
          onChangeText={(value) => {
            setText(value);
            if (onChangeText) {
              onChangeText(value);
            }
          }}
        />
        {addbtn && (
          <Pressable onPress={() => handleSubmit("Add Points")}>
            <Text style={styles.addBtn}>Add</Text>
          </Pressable>
        )}
      </View>
      {reedembtn && (
        <Pressable onPress={() => handleSubmit("Redeem Points")} style={styles.reedembtn}>
          <Text style={styles.addBtn}>Redeem Points</Text>
        </Pressable>
      )}
      {bottomLabel && <Text style={styles.bottomLabel}>{bottomLabel}</Text>}
    </View>
  );
};

export default FormInput;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  withButton: {
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1.7,
    borderColor: '#6A6363',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#2C3E50',
  },
  fullWidthInput: {
    flex: 1,
  },
  inputWithButton: {
    flex: 0.90,
  },
  addBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: 'whitesmoke',
    backgroundColor: '#B71B36',
    borderRadius: 8,
    fontWeight: '500',
    fontSize: 16,
  },
  bottomLabel: {
    color: '#455A64DE',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    marginLeft: 5
  },
  topLabel: {
    color: '#455A64DE',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 6,
    marginBottom: 8
  },
  reedembtn: {
    backgroundColor: "#B71B36",
    borderRadius: 6,
    marginTop: 18,
    alignSelf: "center",
    paddingVertical: 3,
    marginBottom: 18
  }
});
