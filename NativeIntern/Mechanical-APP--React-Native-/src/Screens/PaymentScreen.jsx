import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import PaymentNavigation from '../Navigation/PaymentNavigation/PaymentNavigation';

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PaymentNavigation />
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({})