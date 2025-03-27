import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const notifications = [
    {
        id: '1',
        icon: 'check-circle-outline',
        title: 'Discount Offer',
        description: 'Eum et eum sit neque mollitia itaque.',
        time: '2h',
    },
    {
        id: '2',
        icon: 'credit-card',
        title: 'You have to pay Rs.1800/-',
        description:
            'Engine oil Rs.2000/- purchased. Paid Rs.200/- Remaining is 800.',
        time: '2h',
    },
    {
        id: '3',
        icon: 'local-offer',
        title: '20 % Off For Now',
        description: '🎉 Enjoy 20% OFF Now!\nBiggest Offer on all Products.',
        time: '25/12',
    },
    {
        id: '4',
        icon: 'local-offer',
        title: '10 % Off For Now',
        description: '🎉 Enjoy 20% OFF Now!\nBiggest Offer on all Products.',
        time: '25/11',
    },
];

const NotificationScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <ScrollView>
            <TouchableOpacity style={styles.notificationItem}>
                <MaterialIcons name={item.icon} size={30} color="#E91E63" />
                <View style={styles.notificationText}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
            </TouchableOpacity>
            <View style={styles.notificationline}></View>
        </ScrollView>
    );
    return (
        <View style={styles.Conatiner}>
            <StatusBar translucent={true} barStyle={'dark-content'} />
            <View style={styles.line}></View>
            <View style={styles.IconsConatiner}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} />
                </TouchableOpacity>
                <View style={styles.headertextcontainer}>
                    <Text style={styles.HeaderText}>Notification</Text>
                </View>
            </View>
            <View style={styles.baseline}></View>
            <TouchableOpacity>
                <Text style={styles.markAsRead}>Mark As Read</Text>
            </TouchableOpacity>

            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default NotificationScreen;

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

        marginTop: 20,
        marginHorizontal: 20,
    },
    headertextcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: 500,
    },
    baseline: {
        borderBottomWidth: 1.5,
        borderColor: '#D3D3D3',
        marginTop: 13,
    },
    markAsRead: {
        fontSize: 15,
        color: '#E91E63',
        alignSelf: 'flex-end',
        marginRight: 25,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E91E63',
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
    },
    notificationText: {
        flex: 1,
        marginLeft: 13,
    },
    notificationline: {
        borderBottomWidth: 2,
        borderBottomColor: '#D3D3D3',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 14,
        color: '#757575',
        marginTop: 2,
    },
    time: {
        fontSize: 14,
        color: '#E91E63',
    },

});