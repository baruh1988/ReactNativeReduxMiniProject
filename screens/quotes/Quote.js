import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import Styles from '../../utils/Style';
import Color from '../../utils/Color';
import { useDispatch } from 'react-redux';

const Quote = () => {
    return(
        <View style={Styles.container}>
            <Text>Quote</Text>
        </View>
    );
}

export default Quote;