import {
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const userInformation = {
    Image: require('../../assets/avatar.jpeg'),
    Name: 'Nitish Tiwari',
    Phone: '879-458-1883',
    Address: 'New Delhi',
    content:
        '`Adipisci natus unde dignissimos itaque voluptatem et sit. Cum ut ab ab. Et consequatur sunt mollitia. Delectus voluptas eum et ratione est.Culpa error maxime totam et. Dolore hic voluptas maiores sit ab. Quod ut est sunt dolore qui magnam sit. Aut atque est dolor. Ipsam labore quod temporibus quidem optio nostrum. Qui magni et sapiente.   Eum veritatis animi. Nisi necessitatibus maxime veniam omnis. Ipsam nam cupiditate dolores molestiae. Optio suscipit et quo.`',
};

const PrivacyPolicy = () => {
    const navigation = useNavigation()
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
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.userInformationContainer}>
                    <Image style={styles.profileImage} source={userInformation.Image} />
                    <View style={styles.userInformation}>
                        <Text style={styles.profileName}>{userInformation.Name}</Text>
                        <Text style={styles.profileAddress}>{userInformation.Address}</Text>
                        <Text style={styles.profilePhone}>{userInformation.Phone}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{userInformation.content}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default PrivacyPolicy;

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
    contentContainer: {
        padding: 10,
        marginHorizontal: 10,
    },
    contentText: {
        fontWeight: 500
        , fontSize: 18,
        color: '#333',
    },
});