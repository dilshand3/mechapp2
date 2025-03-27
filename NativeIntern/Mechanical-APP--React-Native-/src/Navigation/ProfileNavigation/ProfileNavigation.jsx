import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from '../../Screens/Profile/EditProfile';
import MyProfile from '../../Screens/Profile/MyProfile';
import PrivacyPolicy from '../../Screens/PrivacyPolicy/PrivacyPolicy';
import AboutUs from '../../Screens/AboutUs/AboutUs';
import ReferNwinScreen from '../../Screens/ReferNwin/ReferNwinScreen';
import ReferNwinPolicy from '../../Screens/ReferNwin/ReferNwinPolicy';

const ProfileNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='myProfile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='myProfile' component={MyProfile} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='referNwin' component={ReferNwinScreen} />
            <Stack.Screen name='referNwinPolicy' component={ReferNwinPolicy} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation;