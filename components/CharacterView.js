import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../utils/Color';
import Style from '../utils/Style';

const CharacterView = props => {
    return(
        <TouchableOpacity onPress={props.onViewClick}>
            <View style={Style.character_view_container}>
                <View style={Style.character_view_avatar}>
                    <Image style={{width: 70, height: 70}} source={{uri: props.avatar}} />
                </View>
                <View style={Style.character_view_context}>
                    <Text style={Style.character_title}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CharacterView;