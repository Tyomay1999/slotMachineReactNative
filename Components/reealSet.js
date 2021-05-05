import React,{ Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Constants } from '../constants';
import Reel from './reel';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.unlockAsync()
class ReelSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        }
    }
    
    onLayout = (e) => {
        this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
        })
            
    }
    
    renderReels = () => {
        let reelWidth = this.state.width / Constants.REELS;
        console.log("🚀 ~ file: reealSet.js ~ line 28 ~ ReelSet ~ reelWidth", reelWidth)
        let reelList = Array.apply(null, Array(Constants.REELS)).map((elem, index) => {
            return <Reel width={reelWidth} height={this.state.height} key={index} index={index}/>
        })
        return(
            <>
                {reelList}
            </>
        )
    }
    
    render() {
        return (
            <View style={style.reealSet} onLayout={this.onLayout}>
                    { this.renderReels()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    reealSet: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange'
    }
})

export default ReelSet