import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {useNavigation} from '@react-navigation/native';
  
  const Data = {
    content:
      'Adipisci natus unde dignissimos itaque voluptatem et sit. Cum ut ab ab. Et consequatur sunt mollitia. Delectus voluptas eum et ratione est.Culpa error maxime totam et. Dolore hic voluptas maiores sit ab. Quod ut est sunt dolore qui magnam sit. Aut atque est dolor. Ipsam labore quod temporibus quidem optio nostrum. Qui magni et sapiente.   Eum veritatis animi. Nisi necessitatibus maxime veniam omnis. Ipsam nam cupiditate dolores molestiae. Optio suscipit et quo.',
  };
  const AboutUs = () => {
    const navigation = useNavigation();
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
            <Text style={styles.headerText}>About Us</Text>
          </View>
        </View>
        <View style={styles.baseline} />
  
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{Data.content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default AboutUs;
  
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