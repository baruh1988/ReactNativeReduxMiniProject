import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image } from 'react-native';
import Styles from '../../utils/Style';
import Color from '../../utils/Color';
import { useDispatch } from 'react-redux';

const CharacterDetail = props => {
    return(
        <View style={Styles.container}>
            <Image style={{width:'100%', height:500}} source={{uri: props.route.params.character.img}} />
        </View>
    );
}

export const screenOptions = navData => {
    return{
        headerTitle: navData.route.params.character.name,
    }
}

export default CharacterDetail;