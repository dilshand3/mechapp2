import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import Header from './Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const image = [
    require('../../assets/engine.jpeg'),
    require('../../assets/engine.jpeg'),
    require('../../assets/engine.jpeg'),
    require('../../assets/engine.jpeg'),
];
const products = [
    {
        id: '1',
        image: require('../../assets/fortuneImg.png'),
        name: 'Motor',
        description: 'voluptas laborum',
        price: '2000',
        discount: '20%',
    },
    {
        id: '2',
        image: require('../../assets/fortuneImg.png'),
        name: 'Control Cable',
        description: 'voluptas laborum',
        price: '1000',
        discount: '30%',
    },
    {
        id: '3',
        image: require('../../assets/fortuneImg.png'),
        name: 'Filter',
        description: 'voluptas laborum',
        price: '500',
        discount: '20%',
    },
    {
        id: '4',
        image: require('../../assets/fortuneImg.png'),
        name: 'Oil',
        description: 'voluptas laborum',
        price: '700',
        discount: '20%',
    },
    {
        id: '5',
        image: require('../../assets/fortuneImg.png'),
        name: 'Engine Oil',
        description: 'Lorem ipsum',
        price: '1500',
        discount: '15%',
    },
];


const DashboardScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={styles.headertextcontainer}>
                <Text style={styles.headertext}>Offers & Discounts</Text>
            </View>
            {/* Showing The Images Ads */}
            <View>
                <FlatList

                    data={image}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={item} style={styles.adsimages} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            {/* Products text and filterIcons */}
            <View style={styles.productsheaderConatiner}>
                <View style={styles.producttextcontainer}>
                    <Text style={styles.headertext}>Products</Text>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}

                    >
                        <MaterialIcons name="arrow-drop-down" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.producttextcontainer}>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}

                    >
                        <AntDesign name="filter" size={32} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Products */}
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.gridContainer}>
                    {products.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.productCard}
                            onPress={() => navigation.navigate("MotorScreen")}
                        >
                            {/* Discount Tag */}
                            <View style={styles.discountTag}>
                                <Text style={styles.discountText}>{item.discount} OFF</Text>
                            </View>

                            {/* Product Image */}
                            <Image source={item.image} style={styles.productImage} />

                            {/* Product Name */}
                            <Text style={styles.productName}>{item.name}</Text>

                            {/* Product Description */}
                            <Text style={styles.productDescription}>{item.description}</Text>

                            {/* Product Price */}
                            <Text style={styles.productPrice}>
                                Price RS.{item.price}/-
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    headertextcontainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    headertext: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 700,
    },

    adsimages: {
        width: width - 20,
        height: 175,
        marginHorizontal: 10,
        borderRadius: 10,
    },

    producttextcontainer: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // marginHorizontal: 10,
        // marginTop: 10,
        alignItems: 'center',
    },
    productsheaderConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        zIndex: 1,
    },
    container: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allows wrapping to the next row
        justifyContent: 'space-between',
    },
    productCard: {
        height: 210,
        width: '45%', // Adjust for spacing
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#f00',
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    discountTag: {
        position: 'absolute',
        top: 10,
        left: 23,

        backgroundColor: '#00c853',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
        zIndex: 1,
    },
    discountText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    productImage: {
        width: 120,
        height: 120,
        marginBottom: 8,
        borderRadius: 5,
        borderWidth: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f00',
        marginTop: 5,
    },
});