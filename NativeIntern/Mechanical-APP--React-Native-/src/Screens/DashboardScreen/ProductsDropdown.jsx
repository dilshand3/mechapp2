import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from  'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ProductsDropdown = ({ visible, onClose }) => {
  const navigation = useNavigation();
  
  const productCategories = [
    "View all Products",
    "Engine Oil",
    "Control Cable",
    "Air Filter",
    "Motors",
    "Bearing",
    "Rubber feet",
    "Pumps"
  ];
  
  const handleProductSelection = (item) => {
    onClose(); // Close the dropdown
    
    // Navigation logic for product categories
    if (item === "View all Products") {
      navigation.navigate('AllProducts');
    } else {
      navigation.navigate('CategoryProducts', { category: item });
    }
  };
  
  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.dropdownItem}
      onPress={() => handleProductSelection(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
  
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={[styles.dropdownContainer, { top: 60, left: 10 }]}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>View all Products</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={productCategories}
            renderItem={renderProductItem}
            keyExtractor={item => item}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdownContainer: {
    position: 'absolute',
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownTitle: {
    fontWeight: 'bold',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f8f8f8',
  }
});

export default ProductsDropdown;