import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


// Dummy data
const Product = {
    id: 1,
    name: 'Natus voluptates illo aspernatur.',
    price: 2000,
    oldPrice: 3000,
    discount: '20% OFF',
    description:
        'Ipsum suscipit doloribus animi excepturi. Et facilis rerum eligendi et. Vitae ducimus eveniet nam temporibus aspernatur debitis praesentium quia.',
    image: require('../../assets/engine.jpeg'),
    reviews: [
        {
            id: 1,
            user: 'Astha',
            time: '03 hr',
            comment:
                'Facilis dicta cupiditate ut rerum qui laudantium facere veritatis non. Nulla velit soluta doloremque ipsum ipsum odit. Nihil qui et.',
            avatarUrl: require('../../assets/engine.jpeg'),
        },
        {
            id: 2,
            user: 'raja',
            time: '9 hr',
            comment:
                'Facilis dicta cupiditate ut rerum qui laudantium facere veritatis non. Nulla velit soluta doloremque ipsum ipsum odit. Nihil qui et.',
            avatarUrl: require('../../assets/engine.jpeg'),
        },
        {
            id: 3,
            user: 'basgha',
            time: '23 hr',
            comment:
                'Facilis dicta cupiditate ut rerum qui laudantium facere veritatis non. Nulla velit soluta doloremque ipsum ipsum odit. Nihil qui et.',
            avatarUrl: require('../../assets/engine.jpeg'),
        },
        {
            id: 4,
            user: 'yash',
            time: '12 hr',
            comment:
                'Facilis dicta cupiditate ut rerum qui laudantium facere veritatis non. Nulla velit soluta doloremque ipsum ipsum odit. Nihil qui et.',
            avatarUrl: require('../../assets/engine.jpeg'),
        },
    ],
};
const ReviewCard = ({ item }) => (
    <View style={styles.reviewCard}>
        <View style={{ flexDirection: 'row' }}>
            <Image source={item.avatarUrl} style={styles.avatar} />
            <View style={{ alignItems: 'center ', marginHorizontal: 10, marginTop: 11 }}>
                <Text style={styles.userName}>{item.user}</Text>
                <Text style={styles.time}>{item.time} ago</Text>
            </View>
        </View>
        <Text>{item.comment}</Text>
    </View>
);
const SingleProductScreen = () => {
    const navigation = useNavigation();
    return (
        // Header
        <ScrollView style={styles.Conatiner}>
            <StatusBar translucent={true} barStyle={'dark-content'} />
            <View style={styles.line}></View>
            <View style={styles.IconsConatiner}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color={'red'}
                        opacity={0.6}
                    />
                </TouchableOpacity>
            </View>
            {/*Image Conatiner  */}
            <View style={styles.ImageConatiner}>
                <Image source={Product.image} style={styles.image} />
                <View style={styles.DiscountTextContainer}>
                    <MaterialIcons name="discount" size={20} color={'white'} />
                    <Text style={styles.DiscountText}>{Product.discount}</Text>
                </View>
            </View>
            <Text style={styles.ProductName}>{Product.name}</Text>
            <Text style={{ fontSize: 15, marginTop: 10, marginHorizontal: 15 }}>
                Price :
            </Text>
            {/* price */}
            <View style={styles.PriceContainer}>
                <View
                    style={{
                        position: 'relative',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <MaterialIcons name="currency-rupee" size={23} color={'#A5A5A5'} />
                    <Text style={styles.oldPrice}>{Product.oldPrice}</Text>

                    <View style={styles.strikeThroughLine} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="currency-rupee" size={28} />
                    <Text style={{ fontSize: 27, fontWeight: 500 }}>{Product.price}</Text>
                </View>
            </View>
            <Text style={styles.ProductName}>Description</Text>
            <Text style={styles.DescriptionText}>{Product.description}</Text>
            {/* Buuton */}
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Add to Cart</Text>
            </TouchableOpacity>
            {/* Reviews */}
            <Text style={styles.ProductName}>Review</Text>
            <FlatList
                data={Product.reviews}
                renderItem={({ item }) => <ReviewCard item={item} />}
                keyExtractor={item => item.id.toString()}
                horizontal

                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
            />
        </ScrollView>
    );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        backgroundColor: 'white',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1.5,
        marginTop: 60,
    },
    IconsConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
    },
    ImageConatiner: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 280,
        width: '79%',
        borderWidth: 1,
        padding: 5,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'red',
    },
    image: {
        resizeMode: 'cover',
        height: 240,
        width: '90%',
        borderRadius: 20,
    },
    DiscountText: {
        fontWeight: 500,
        color: 'white',
        backgroundColor: '#02C629',
        borderRadius: 10,
    },
    DiscountTextContainer: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#02C629',
        borderRadius: 7,
        top: 25,
        left: 25,
        paddingHorizontal: 6,
    },
    ProductName: {
        fontSize: 23,
        marginTop: 20,
        marginHorizontal: 15,
        fontWeight: 500,
    },
    PriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    oldPrice: {
        fontSize: 24,
        color: '#A5A5A5',
        fontWeight: 500,
    },

    strikeThroughLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '45%',
        height: 1.5,
        backgroundColor: 'red',
    },
    DescriptionText: {
        fontSize: 18,
        marginHorizontal: 15,
        marginTop: 10,
        fontFamily: 'Poppins',
    },
    Button: {
        backgroundColor: '#B71B36',
        height: 60,
        textAlign: 'center',
    },
    Button: {
        backgroundColor: '#B71B36',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 25,
        marginHorizontal: 10,
    },

    ButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    reviewCard: {
        width: 370, padding: 10,
        marginBottom: 50,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: 'dark-grey',
        textAlign: 'center',
        marginBottom: 8,
    },
    comment: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 400,

    },
    container: {
        padding: 10,
    }
});