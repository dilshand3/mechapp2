import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MotorsScreen from '../../Screens/ProductsScreen/MotorScreen';
import DashboardScreen from '../../Screens/DashboardScreen/DashboardScreen';
import SingleProductScreen from '../../Screens/ProductsScreen/SingleProductScreen';
import NotificationScreen from '../../Screens/NotificationScreen/NotificationScreen';
import Cart from '../../Screens/Cart/Cart';
import OrderSummery from '../../Screens/Cart/OrderSummery';

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='dashboard' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='dashboard' component={DashboardScreen} />
            <Stack.Screen name='MotorScreen' component={MotorsScreen} />
            <Stack.Screen name='SingleProductScreen' component={SingleProductScreen} />
            <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
            <Stack.Screen name='CartScreen' component={Cart} />
            <Stack.Screen name='orderSummery' component={OrderSummery} />
        </Stack.Navigator>
    )
}

export default HomeNavigation;