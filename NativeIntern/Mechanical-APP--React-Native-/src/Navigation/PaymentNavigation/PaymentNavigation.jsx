import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllPayment from '../../Screens/AllPayment';
import OrderHistory from '../../Screens/OrderHistory';
import PaymentHistory from '../../Screens/PaymentHistory';
import SearchInput from '../../components/Input/SearchInput';
import PaymentStackNavigation from '../PaymentStackNavigation/PaymentStackNavigation';

const Tab = createMaterialTopTabNavigator();

const PaymentNavigation = () => {
    return (
        <View style={styles.container}>
            <View>
                <SearchInput />
            </View>
            <Tab.Navigator initialRouteName='All'
                screenOptions={{
                    tabBarActiveTintColor: '#B71B36',
                    tabBarInactiveTintColor: '#000',
                    tabBarLabelStyle: { fontSize: 14, fontWeight: '500' },
                    tabBarIndicatorStyle: { backgroundColor: '#B71B36', height: 2 },
                    tabBarScrollEnabled: false,
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1.2,
                        paddingHorizontal: 12,
                    },
                    tabBarItemStyle: {
                        width: 'auto',
                    }
                }}
            >
                <Tab.Screen name="All" component={AllPayment} key={"all"} />
                <Tab.Screen name="Order History" component={OrderHistory} key={"Orderhistory"} />
                <Tab.Screen name="Payment History" component={PaymentHistory} key={"Payment history"} />
                <Tab.Screen name="Payment Slip" component={PaymentStackNavigation} key={"Payment Slip"} />
            </Tab.Navigator>
        </View>
    )
}

export default PaymentNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
