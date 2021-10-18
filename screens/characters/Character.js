import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import Styles from '../../utils/Style';
import Color from '../../utils/Color';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/Actions';
import CharacterView from '../../components/CharacterView';

const Character = props => {

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const getCharactersFromAction = useCallback(async () => {
        let action = Actions.getCharactersAction();
        try {
            await dispatch(action);
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        getCharactersFromAction();
    },[]);

    const data = useSelector(state => state.characters);

    //console.log(JSON.stringify(data));

    return(
        <View style={Styles.container}>
            {
                isLoading ? 
                (
                    <ActivityIndicator color={Color.bluelight} size='large' />
                ) 
                : 
                (
                    <View style={{width: '100%'}}>
                        {
                            data?.characters.length > 0 ? 
                            (
                                <FlatList 
                                    data={data.characters}
                                    //data={data.characters.slice(0, 8)}
                                    keyExtractor={item => item.char_id}
                                    renderItem={itemData => <CharacterView 
                                        name={itemData.item.name}
                                        avatar={itemData.item.img}
                                        nickname={itemData.item.nickname}
                                        onViewClick={() => {
                                            props.navigation.navigate('CharacterDetail', {character: itemData.item})
                                        }}
                                    />}
                                />
                            ) 
                            : 
                            (
                                <Text>There is no data for you</Text>
                            )
                        }
                    </View>
                )
            }
        </View>
    );
}

export const screenOptions = () => {
    return{
        headerTitle: 'Breaking Bad Characters',
    }
}

export default Character;