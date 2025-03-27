import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.HearderContainer}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.textContainer}>
                <Text style={styles.headertext}>Welcome</Text>
            </View>
            <View style={styles.iconcontainer}>
                <View style={styles.searchcontainer}>
                    <TextInput
                        style={{ fontSize: 12, width: 190, color: '#36454F' }}
                        placeholder="Search your query"
                        placeholderTextColor={'#36454F'}
                    />
                    <Feather name="search" size={20} color="grey" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
                    <AntDesign name="shoppingcart" size={30} color="#36454F" />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                    <MaterialIcons name="notifications-none" size={32} color="#36454F" />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>4</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Horizontal Line */}
            <View style={styles.line} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    HearderContainer: { backgroundColor: 'white', width: '100%' },

    textContainer: {
        backgroundColor: '#FEF7FF',
        height: 70,
        justifyContent: 'center',

        marginTop: 10,
    },
    headertext: {
        fontFamily: 'Title Large/Font ',
        fontSize: 25,
        textAlign: 'center',
    },
    searchcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 50,
        marginHorizontal: 10,

        borderWidth: 1,
        borderColor: '#696969',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    iconcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'space-between',
        marginTop: 4,
        position: 'relative'
    },

    badge: {
        position: 'absolute',
        right: -6,
        top: -4,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    line: {
        borderBottomColor: '#696969',
        borderBottomWidth: 1,
        marginTop: 15,
    },
});