import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const content = {
    content:
        'Adipisci natus unde dignissimos itaque voluptatem et sit. Cum ut ab ab. Et consequatur sunt mollitia. Delectus voluptas eum et ratione est.Culpa error maxime totam et. Dolore hic voluptas maiores sit ab. Quod ut est sunt dolore qui magnam sit. Aut atque est dolor. Ipsam labore quod temporibus quidem optio nostrum. Qui magni et sapiente.   Eum veritatis animi. Nisi necessitatibus maxime veniam omnis. Ipsam nam cupiditate dolores molestiae. Optio suscipit et quo.',
};
const ReferNwinPolicy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor="white"
            />
            <View style={styles.line} />
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} />
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Refer n Earn Policy</Text>
                </View>
            </View>
            <View style={styles.baseline} />
            {/* Image  */}
            <ScrollView>
                <View style={styles.imagecontainer}>
                    <View style={styles.textandimageconatiner}>
                        <Text style={styles.text}>Refer Your Friend</Text>
                        <View style={styles.imageWrapper}>
                            {/* First shadow layer - lighter gold */}
                            <View
                                style={[
                                    styles.shadowLayer,
                                    { shadowColor: '#FFD700', shadowOpacity: 0.8 },
                                ]}
                            />
                            {/* Second shadow layer - deeper gold */}
                            <View
                                style={[
                                    styles.shadowLayer,
                                    { shadowColor: '#DAA520', shadowOpacity: 0.7 },
                                ]}
                            />
                            {/* Image */}
                            <Image
                                style={styles.image}
                                source={require('../../assets/goldCoin.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{content.content}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ReferNwinPolicy;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1.5,
        marginTop: 60,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    baseline: {
        borderBottomWidth: 1.5,
        borderColor: '#D3D3D3',
        marginTop: 13,
    },
    imagecontainer: {
        position: 'relative',
        height: 150,
        backgroundColor: '#B71B36',
    },
    textandimageconatiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        // Cannot able to give shadow to the gold
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 500,
    },
    contentContainer: {
        padding: 10,

        marginHorizontal: 10,
    },
    contentText: {
        fontWeight: 500,
        fontSize: 18,
        color: '#333',
        lineHeight: 25,
    },
});