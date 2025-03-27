import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import ProductImg from "../../assets/fortuneImg.png";
import whatsappImg from "../../assets/whatsapp.png";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const OrderDetailData = [{
    name: "Total Items",
    value: 2
},
{
    name: "Delivery Charges",
    value: "Rs0.00"
},
{
    name: "GST",
    value: '10%'
},
{
    name: "Order detail",
    value: "Rs.3500/-"
}
]

const OrderDetail = ({ name, value }) => {
    return (
        <View style={orderStyle.container}>
            <Text style={orderStyle.key}>{name}:</Text>
            <Text style={orderStyle.value}>{value}</Text>
        </View>
    )
}

const OrderSummery = ({ navigation }) => {
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
        <ScrollView>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="#000000" />
                </Pressable>
                <Text style={styles.headingTxt}>Order Summery</Text>
            </View>
            <View style={styles.content}>
                {
                    productData.map((val, index) => {
                        return <ProductContainer key={index} img={val.img} name={val.name} description={val.description} discount={val.discount} price={val.price} />
                    })
                }
            </View>
            {
                OrderDetailData.map((val, index) => (
                    <OrderDetail key={index} name={val.name} value={val.value} />
                ))
            }
            <View style={styles.address}>
                <Text style={styles.deliverTxt}>Deliverd to <FontAwesome6 name="location-dot" size={18} /></Text>
                <Text>ID154826</Text>
                <Text>Omnis error fuga soluta.</Text>
                <Text>Magni et et earum sunt.</Text>
                <Text>+91 9876543210</Text>
            </View>
            <Pressable style={styles.proceedbtn}><Image source={whatsappImg} /> <Text style={styles.proceedbtntxt}>Order Now</Text></Pressable>
        </ScrollView>
    )
}

export default OrderSummery;

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
        paddingLeft: "4%"
    },
    headingTxt: {
        color: "#000000",
        fontSize: 22,
        marginLeft: 90,
    },
    content: {
        marginBottom: "5%",
        borderBottomColor: "#000000",
        borderBottomWidth: 0.7,
        paddingBottom: "6%"
    },
    proceedbtn: {
        backgroundColor: "#B71B36",
        alignSelf: "flex-start",
        margin: "auto",
        marginTop: "10%",
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 19,
        elevation: 10,
        shadowRadius: 19,
        alignItems: "center",
        flexDirection: "row"
    },
    proceedbtntxt: {
        color: "white",
        paddingHorizontal: 20,
        fontSize: 18
    },
    address: {
        borderTopColor: "#000000",
        borderTopWidth: 0.7,
        borderBottomColor: "#000000",
        borderBottomWidth: 0.7,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    deliverTxt: {
        fontSize: 20,
        fontWeight: '700'
    }
})

const orderStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    key: {
        fontWeight: "600",
        color: "#000000",
        fontSize: 18
    },
    value: {
        fontWeight: "400",
        color: "#000000",
        fontSize: 18,
    }
})