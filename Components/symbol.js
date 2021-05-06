import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Images from '../assets/images'


const Symbols = ({symbol,width,height}) => {
    let symbolSource = getImage(symbol);
    return (
        <View style={[style.symbol, { width:width, height: height }]}>
            <Image style={{width: width - 20, height: height - 20}} resizeMode='contain' source={symbolSource}/>
        </View>
      )

}

const getImage = (symbol) => {
    switch (symbol) {
        case 'B':
            return Images.bell;
        case 'C':
            return Images.cherry;
        case 'X':
            return Images.clock;
        case 'D':
            return Images.dice;
        case 'G':
            return Images.grape;
        case 'L':
            return Images.lemon;
        case 'M':
            return Images.melon;
        case 'O':
            return Images.orange;
        case 'P':
            return Images.plum;
        case '7':
            return Images.seven;
        case 'S':
            return Images.star;
        default:
            return Images.dice;
    }
}


const style = StyleSheet.create({
    symbol: {
        backgroundColor: 'red',
        padding: 10
    }
})

export default Symbols;