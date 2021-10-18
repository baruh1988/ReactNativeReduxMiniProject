import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import Styles from '../../utils/Style';
import Color from '../../utils/Color';
import { useDispatch } from 'react-redux';

const Death = () => {
    return(
        <View style={Styles.container}>
            <Text>Death</Text>
        </View>
    );
}

export default Death;