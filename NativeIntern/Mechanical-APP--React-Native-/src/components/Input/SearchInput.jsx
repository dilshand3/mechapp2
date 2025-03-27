import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const SearchInput = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} />
            </Pressable>
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search' style={styles.input} />
                <View style={styles.searchIcon}>
                    <AntDesign name="search1" size={20} color={"#6B7280"} />
                </View>
            </View>
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        gap: 5,
        paddingHorizontal: 13,
        marginTop: 22
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#6B7280",
        borderWidth: 0.7,
        paddingHorizontal: 5,
        width: "90%",
        borderRadius: 8,
        backgroundColor: "white"
    },
    input: {
        width: "100%"
    },
    searchIcon: {
        position: "relative",
        right: 30,
        alignItems: "flex-start",
    }
})