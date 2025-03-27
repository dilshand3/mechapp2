import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ReferNwinScreen = () => {
    const navigation = useNavigation();
    return (
        <LinearGradient
            style={styles.container}
            colors={['#FFFFFF', '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFEE58']}>
            <StatusBar translucent={true} barStyle={'dark-content'} />

            <View style={styles.line}></View>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("referNwinPolicy")}>
                        <AntDesign name="questioncircleo" size={23} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerTextContainer}>
                    <View>
                        <Text style={styles.headerText}>Refer your Friend</Text>
                        <Text style={styles.headerSubText}>Earn ₹150 each</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.coinsimage}
                            source={require('../../assets/goldCoin.png')}
                        />
                    </View>
                </View>
            </View>

            {/* Points Card */}
            <View style={styles.pointsCard}>
                <View style={styles.pointsRow}>
                    <Image
                        source={require('../../assets/coin.png')}
                        style={styles.starIcon}
                    />
                    <View style={styles.pointsTextContainer}>
                        <Text style={styles.pointsValue}>300 Pts</Text>
                        <Text style={styles.pointsLabel}>Total Points Earn</Text>
                    </View>
                </View>
                <View style={styles.referralLinkContainer}>
                    <Text style={styles.referralLabel}>Referral Link</Text>
                    <View style={styles.referralLinkRow}>
                        <Text style={styles.referralLink}>tyrell.net</Text>
                        <TouchableOpacity style={styles.copyButton}>
                            <Ionicons name="copy-outline" size={20} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Instructions Card */}
            {/* <View style={styles.instructionsCard}> */}
            <LinearGradient
                colors={['#FFF0F5', '#FFE4E8', '#FFDBDF']}
                style={styles.instructionsCard}>
                <View style={styles.instructionItem}>
                    <Image
                        source={require('../../assets/LinkIcon.png')} // Add your link icon
                        style={styles.instructionIcon}
                    />
                    <Text style={styles.instructionText}>
                        Invite your Friend to install the app with the link
                    </Text>
                </View>
                <View style={styles.instructionItem}>
                    <Image
                        source={require('../../assets/Box.png')} // Add your box icon
                        style={styles.instructionIcon}
                    />
                    <Text style={styles.instructionText}>
                        Your friend places a minimum order of ₹300
                    </Text>
                </View>
                <View style={styles.instructionItem}>
                    <Image
                        source={require('../../assets/Wallet.png')} // Add your reward icon
                        style={styles.instructionIcon}
                    />
                    <Text style={styles.instructionText}>
                        You get ₹150 once the return period is over
                    </Text>
                </View>
                <Image
                    source={require('../../assets/CelebrationImage.png')} // Add celebration person image
                    style={styles.celebrationImage}
                />
            </LinearGradient>
            <View style={styles.popularRewardsHeader}>
                <Text style={styles.popularRewardsText}>Popular in Reward</Text>
                <View style={styles.pointsIndicator}>
                    <Text style={styles.pointsIndicatorText}>You have 300Pts</Text>
                </View>
            </View>

            {/* Rewards Scroll */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.rewardsScroll}>
                <RewardItem
                    title="Engine Oil"
                    discount="Extra ₹200 off on"
                    points={200}
                />
                <RewardItem
                    title="Service Cables"
                    discount="Extra ₹200 off on"
                    points={200}
                />
                <RewardItem
                    title="Cables"
                    discount="Extra ₹200 off on"
                    points={100}
                />
            </ScrollView>
        </LinearGradient>

    );
};

// Helper component for reward items
const RewardItem = ({ title, discount, points }) => {
    return (
        <View style={styles.rewardItem}>
            <Image
                source={require('../../assets/avatar.jpeg')} // Add placeholder image
                style={styles.rewardImage}
            />
            <Text style={styles.rewardTitle}>{title}</Text>
            <Text style={styles.rewardDiscount}>{discount}</Text>
            <TouchableOpacity style={styles.useButton}>
                <Text style={styles.useButtonText}>Use • {points}pts</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReferNwinScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    line: {
        borderBlockColor: 'black',
        borderBottomWidth: 2,
        marginTop: 60,
    },
    header: {
        backgroundColor: '#E03131',
        height: 170,
        padding: 15,
    },
    backButton: {
        marginBottom: 10,
    },
    headerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    headerSubText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    coinsimage: {
        marginTop: -30,
        height: 140,
        width: 140,
        position : "relative",
        zIndex : 3
    },
    pointsCard: {
        backgroundColor: 'white',
        marginTop: -20,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    pointsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    starIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#FFD700',
        borderRadius: 20,
    },
    pointsTextContainer: {
        marginLeft: 10,
    },
    pointsValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pointsLabel: {
        color: 'gray',
        fontSize: 14,
    },
    referralLinkContainer: {
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        paddingTop: 15,
    },
    referralLabel: {
        color: '#FFD700',
        fontSize: 14,
        fontWeight: '500',
    },
    referralLinkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    referralLink: {
        fontSize: 16,
        fontWeight: '500',
    },
    copyButton: {
        padding: 5,
    },
    instructionsCard: {
        justifyContent: 'center',
        height: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        padding: 15,
        position: 'relative',
    },
    instructionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    instructionIcon: {
        width: 30,
        height: 40,
        marginRight: 10,
    },
    instructionText: {
        flex: 1,

        fontSize: 14,
    },
    celebrationImage: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 40,
        height: 87,
    },
    popularRewardsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    popularRewardsText: {
        fontSize: 16,
        fontWeight: '500',
    },
    pointsIndicator: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    pointsIndicatorText: {
        fontSize: 12,
        fontWeight: '500',
    },
    rewardsScroll: {
        marginTop: 15,
        paddingLeft: 20,
    },
    rewardItem: {
        backgroundColor: 'white',
        width: 120,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10
        ,
    },
    rewardImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'center',
    },
    rewardTitle: {
        fontSize: 14,
        fontWeight: '500',
    },
    rewardDiscount: {
        fontSize: 12,
        color: 'green',
        marginVertical: 5,
    },
    useButton: {
        backgroundColor: 'green',
        borderRadius: 5,
        paddingVertical: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    useButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    },
});