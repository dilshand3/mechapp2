import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import BottomNavigation from './src/Navigation/BottomNavigation/BottomNavigation';
import OverlayAndFilter from './src/components/OverLay&Filter/OverlayAndFilter';
import { OverlayAndFilterData1,OverlayAndFilterData2 } from './src/TestingData';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigation/>
      {/* DilaugeBox 7.1 and 7.2 <OverlayAndFilter boxTitle={"Filter"} data={OverlayAndFilterData2} />Use data OverlayAndFilterData1 for Dashboard Overlay*/}
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})