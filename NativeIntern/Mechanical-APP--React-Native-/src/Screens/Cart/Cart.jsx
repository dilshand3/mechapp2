import { StyleSheet, Text, View, Pressable } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import ProductImg from "../../assets/fortuneImg.png"

const Cart = ({ navigation }) => {
    const productData = [{
        img: ProductImg,
        name: "Motor",
        description: "Omnis ut autem dolore alias aut vitae quis.",
        price: 2000,
        discount: 20
    },
    {
        img: ProductImg,
        name: "Engine Oil",
        description: "Est omnis libero iusto beatae sit ab aliquid.",
        price: 1000,
        discount: 20
    }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="#000000" />
                </Pressable>
                <Text style={styles.headingTxt}>Your Cart</Text>
            </View>
            <Text style={styles.subtotal}>SubTotal Rs. 3000/-</Text>
            <View>
                {
                    productData.map((val, index) => {
                        return <ProductContainer key={index} img={val.img} name={val.name} description={val.description} discount={val.discount} price={val.price} />
                    })
                }
            </View>
            <Pressable style={styles.proceedbtn} onPress={() => navigation.navigate("orderSummery")}><Text style={styles.proceedbtntxt}>Proceed to Order (2 items)</Text></Pressable>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: '7%',
        borderBottomColor: "#000000",
        borderBottomWidth: 0.7,
        paddingBottom: "6%",
        marginBottom: "2%",
        paddingLeft : "4%"
    },
    headingTxt: {
        color: "#000000",
        fontSize: 22,
        marginLeft: 110,
    },
    subtotal: {
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: "underline",
    },
    proceedbtn: {
        backgroundColor: "#B71B36",
        alignSelf: "flex-start",
        margin: "auto",
        marginTop: "30%",
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 19,
        elevation: 10,
        shadowRadius: 19
    },
    proceedbtntxt: {
        color: "white",
        paddingHorizontal: 20,
        fontSize: 18
    }
});