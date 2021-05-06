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
        };
        this.reels = [];
    }
    randomBetwen = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) - min)
    }
    spin = () => {
        for(let i = 0; i < Constants.REELS; i++) {
            this.reels[i].scrollByOffset(this.randomBetwen(
                (Constants.REELS_REPEAT - 6) + this.reels[i].symbols.length,
                (Constants.REELS_REPEAT - 5) + this.reels[i].symbols.length
            ))
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
        let reelList = Array.apply(null, Array(Constants.REELS)).map((elem, index) => {
            return <Reel width={reelWidth} height={this.state.height} key={index} index={index} ref={(ref) => {this.reels[index] = ref}}/>
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