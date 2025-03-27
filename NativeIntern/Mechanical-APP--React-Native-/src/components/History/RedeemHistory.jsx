import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RedeemHistory = ({ title, points, date, rupees, loss }) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.points, loss && styles.loss]}> {loss ? `-${points} pts` : `+${points} pts`}</Text>
        <Text style={styles.amount}>{rupees}</Text>
      </View>
    </View>
  );
};

export default RedeemHistory;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom : 8
  },
  date: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 3,
  },
  right: {
    alignItems: 'flex-end',
  },
  points: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
    marginBottom : 8
  },
  amount: {
    fontSize: 16,
    color: '#6B7280',
  },
  loss: {
    color: "#DC2626"
  }
});
