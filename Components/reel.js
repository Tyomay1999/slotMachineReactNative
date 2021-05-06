import React,{ Component } from 'react';
import { View, StyleSheet,Text, Animated } from 'react-native';
import { Constants } from '../constants';
import Symbols from './symbol';
class Reel extends Component {
    constructor(props) {
        super(props);
        this.symbols = 'BBCDGLGLCCCLLDDMS777XDBL';
        this.rellSymbol = this.symbols.repeat(Constants.REELS_REPEAT).split('');
        this.symbolHeight = this.props.height / Constants.SYMBOLS;
        this.position = this.rellSymbol.length - Constants.SYMBOLS;
        this.currentScrollPos = this.position * this.symbolHeight * -1;
        this.state = {
            scrollPos: new Animated.Value(this.currentScrollPos)
        }
    }
    scrollByOffset = (offset) => {
        this.currentScrollPos += (this.symbolHeight + offset) * 15;
        Animated.timing(
            this.state.scrollPos,
            {
                toValue: this.currentScrollPos,
                duration: 750,
                useNativeDriver: true
            }
        ).start(() => {

        })
    }
    
    render() {
        // console.log("🚀 ~ file: reel.js ~ line 10 ~ Reel ~ constructor ~ rellSymbol", this.rellSymbol ? true : false)
        // console.log(`this.props.height-->${this.props.height}|||Constants.SYMBOLS-->${Constants.SYMBOLS}`, this.props.height / Constants.SYMBOLS)
        // console.log('Props-->this.symbolHeight',this.symbolHeight)
        return (
            <View style={[style.reel,{width: this.props.width, height: this.props.height}]}>
                <Animated.View style={{width: this.props.width, height: (this.symbols.length * this.symbolHeight), transform: [{translateY: this.state.scrollPos}]}}>
                    {this.rellSymbol.map((elem,index) => {
                        return <Symbols symbol={elem} key={index} index={index} width={this.props.width} height={this.symbolHeight}/>
                    })}
                </Animated.View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    reel: {
        backgroundColor: 'pink',
        overflow: 'hidden'
    }
})

export default Reel