import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const demoMotorsData = [
  {
    id: '1',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
  {
    id: '2',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
  {
    id: '3',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
  {
    id: '4',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
  {
    id: '5',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
  {
    id: '6',
    name: 'Motor',
    description: 'voluptas laborum',
    price: 'RS.2000/-',
    discount: '20% OFF',
    image: require('../../assets/engine.jpeg'),
  },
];

const MotorsScreen = () => {
  const navigation = useNavigation();
  const renderMotorItem = ({item}) => (
    <TouchableOpacity style={styles.motorCard}
    onPress={()=>navigation.navigate('SingleProductScreen')}>
        
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
      <Image source={item.image} style={styles.motorImage} />
      <Text style={styles.motorName}>{item.name}</Text>
      <Text style={styles.motorDescription}>{item.description}</Text>
      <Text style={styles.motorPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.line}></View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Motors</Text>
        <View style={styles.placeholder} />
      </View>
      <FlatList
        data={demoMotorsData}
        renderItem={renderMotorItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.motorRow}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  backButton: {
    padding: 8,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 20,
  },
  listContent: {
    padding: 8,
  },
  motorRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  motorCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
  },
  motorImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  motorName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  motorDescription: {
    fontSize: 14,
    color: '#66',
    textAlign: 'center',
  },
  motorPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MotorsScreen;