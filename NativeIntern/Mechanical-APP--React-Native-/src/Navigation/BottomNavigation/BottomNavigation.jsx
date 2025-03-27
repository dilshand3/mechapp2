import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SchemeScreen from '../../Screens/SchemeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Test from '../../Screens/Test';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentScreen from '../../Screens/PaymentScreen';
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import HomeNavigation from '../HomeNavigation/HomeNavigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Scheme"
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#6A6363',
                tabBarStyle: {
                    backgroundColor: '#F3EDF7',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIconContainer,
                            ]}
                        >
                            <Octicons name="home" size={22} color={color} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'black' : '#6A6363',
                                fontSize: 12,
                            }}
                        >
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={Test}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIconContainer,
                            ]}
                        >
                            <MaterialIcons name="content-paste" size={22} color={color} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'black' : '#6A6363',
                                fontSize: 12,
                            }}
                        >
                            Order
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Scheme"
                component={SchemeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIconContainer,
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="clipboard-text-outline"
                                size={24}
                                color={color}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'black' : '#6A6363',
                                fontSize: 12,
                            }}
                        >
                            Scheme
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Payment"
                component={PaymentScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIconContainer,
                            ]}
                        >
                            <Octicons name="credit-card" size={22} color={color} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'black' : '#6A6363',
                                fontSize: 12,
                            }}
                        >
                            Payment
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIconContainer,
                            ]}
                        >
                            <Ionicons name="person-circle-outline" size={24} color={color} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'black' : '#6A6363',
                                fontSize: 12,
                                fontWeight: "400"
                            }}
                        >
                            Profile
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    iconContainer: {
        paddingHorizontal: 5,
    },
    activeIconContainer: {
        backgroundColor: '#B71B36',
        width: 65,
        borderRadius: 20,
        height: 30,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
});