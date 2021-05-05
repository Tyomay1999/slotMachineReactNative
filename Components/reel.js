import React,{ Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Constants } from '../constants';
import Symbole from './symbol';
class Reel extends Component {
    constructor(props) {
        super(props);
        this.symbols = 'BBCDGLGLCCCLLDDMS777XDBL',
        this.symbolHeight = this.props.height / Constants.SYMBOLS
    }
    
    
    render() {
        console.log('Props-->Width',this.props.height)
        return (
            <View style={[style.reel,{width: this.props.width, height: this.props.height}]}>
                <View style={{width: this.props.width, height: (this.symbols.length * this.symbolHeight)}}>
                    {this.symbols.split('').map((elem,index) => {
                        return <Symbole symbol={elem} key={index} index={index} width={this.props.width} height={this.symbolHeight}/>
                    })}
                </View>
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