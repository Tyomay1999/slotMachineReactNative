import React,{ Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
class Reel extends Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return (
            <View style={[style.reel,{width: this.props.width, height: this.props.height}]} onLayout={this.onLayout}>
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