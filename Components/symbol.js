import React,{ Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
class Symbole extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <View style={[style.symbol, {width: this.props.width, height: this.props.height}]}>

            </View>
        )
    }
}

const style = StyleSheet.create({
    symbol: {
        backgroundColor: 'red'
    }
})

export default Symbole;