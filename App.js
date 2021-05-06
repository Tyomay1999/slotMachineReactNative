import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import ReelSet from './Components/reealSet';
import { Constants } from './constants';

const App = () => {
  const [reelSet, setReelSet] = useState(null)
  const {container,buttonContainer,playContanier} = styles
  return (
    <ScrollView>
      <View style={container}>
      <View style={playContanier}>
        <ReelSet ref={(ref) => {setReelSet(ref)}}/>
      </View>
      <View style={buttonContainer}>
        <Button title="SPIN" onPress={() => { reelSet.spin()}} />
      </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: 'purple'
  },
  playContanier: {
    height: Constants.MAX_HEIGTH - 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: 'blue'
  }
});

export default App;