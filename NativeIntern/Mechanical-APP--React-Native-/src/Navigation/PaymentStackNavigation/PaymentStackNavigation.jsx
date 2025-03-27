import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentSlip from '../../Screens/PaymentSlip';
import PaymentSlip2 from '../../Screens/PaymentSlip2';

const PaymentStackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='PaymentSlip' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PaymentSlip' component={PaymentSlip} />
            <Stack.Screen name='PaymentSlip2' component={PaymentSlip2} />
        </Stack.Navigator>
    )
}

export default PaymentStackNavigation;