import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import Styles from '../../utils/Style';
import Color from '../../utils/Color';
import { useDispatch, useSelector } from 'react-redux';

const Episode = () => {

    //const data = useSelector(state => state.characters);
    //console.log(JSON.stringify(data));

    return(
        <View style={Styles.container}>
            <Text>Episode</Text>
        </View>
    );
}

export default Episode;