import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductContainer = ({ img, discount, name, description, price }) => {
    const [stock, setstock] = useState(0);

    const handleAdd = () => {
        setstock(stock + 1);
    };

    const handleSub = () => {
        setstock(stock > 0 ? stock - 1 : 0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <View style={styles.discount}>
                    <MaterialIcons name="discount" size={20} color={"white"} />
                    <Text style={styles.discountxt}>{discount} OFF</Text>
                </View>
                <Image source={img} style={styles.img} />
            </View>

            <View style={styles.right}>
                <View style={styles.rightHeading}>
                    <Text style={styles.name}>{name}</Text>
                    <AntDesign name="delete" size={23} />
                </View>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>RS. {price}/-</Text>
                <Text style={styles.stockText}>In stock</Text>
                <View style={styles.stockBtn}>
                    <Pressable onPress={handleSub}>
                        <AntDesign name="minuscircleo" size={22} color={stock > 0 ? "black" : "gray"} />
                    </Pressable>

                    <Text style={styles.stockValue}>{stock}</Text>

                    <Pressable onPress={handleAdd}>
                        <AntDesign name="pluscircleo" size={22} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ProductContainer;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal : 15
    },
    imgContainer: {
        width: "45%",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        borderRadius: 12
    },
    img: {
        width: "100%",
        height: 120,
        resizeMode: "contain",
        marginVertical: 10
    },
    discount: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#02C629",
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        position: "absolute",
        left: 5,
        zIndex: 1
    },
    discountxt: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 4
    },
    right: {
        width: "50%",
        paddingHorizontal: 10,
        marginLeft: 10
    },
    rightHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        fontWeight: "600",
        fontSize: 18
    },
    description: {
        fontSize: 16,
        marginVertical: 5
    },
    price: {
        fontSize: 17,
        fontWeight: "bold"
    },
    stockText: {
        color: "#B71B36",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5
    },
    stockBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#D9D9D9",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        marginTop: 10,
        width: "80%"
    },
    stockValue: {
        fontSize: 18,
        fontWeight: "bold"
    }
});
