import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';

import CharacterScreen, { screenOptions as CharacterScreenOptions } from '../screens/characters/Character';
import CharacterDetailScreen, { screenOptions as CharacterDetailScreenOptions } from '../screens/characters/CharacterDetail';
import EpisodeScreen from '../screens/episodes/Episode';
import EpisodeDetailScreen from '../screens/episodes/EpisodeDetail';
import DeathScreen from '../screens/deaths/Death';
import DeathDetailScreen from '../screens/deaths/DeathDetail';
import QuoteScreen from '../screens/quotes/Quote';
import QuoteDetailScreen from '../screens/quotes/QuoteDetail';

const CharacterStackNavigator = createStackNavigator();
export const CharacterStack = () => {
    return(
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name="Character" component={CharacterScreen} options={CharacterScreenOptions}/>
            <CharacterStackNavigator.Screen name="CharacterDetail" component={CharacterDetailScreen} options={CharacterDetailScreenOptions}/>
        </CharacterStackNavigator.Navigator>
    );
}

const EpisodeStackNavigator = createStackNavigator();
export const EpisodeStack = () => {
    return(
        <EpisodeStackNavigator.Navigator>
            <EpisodeStackNavigator.Screen name="Episode" component={EpisodeScreen}/>
            <EpisodeStackNavigator.Screen name="EpisodeDetail" component={EpisodeDetailScreen}/>
        </EpisodeStackNavigator.Navigator>
    );
}

const DeathStackNavigator = createStackNavigator();
export const DeathStack = () => {
    return(
        <DeathStackNavigator.Navigator>
            <DeathStackNavigator.Screen name="Death" component={DeathScreen}/>
            <DeathStackNavigator.Screen name="DeathDetail" component={DeathDetailScreen}/>
        </DeathStackNavigator.Navigator>
    );
}

const QuoteStackNavigator = createStackNavigator();
export const QuoteStack = () => {
    return(
        <QuoteStackNavigator.Navigator>
            <QuoteStackNavigator.Screen name="Quote" component={QuoteScreen}/>
            <QuoteStackNavigator.Screen name="QuoteDetail" component={QuoteDetailScreen}/>
        </QuoteStackNavigator.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();
export const TabsNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Character" component={CharacterStack}/>
            <Tab.Screen name="Episode" component={EpisodeStack}/>
            <Tab.Screen name="Quote" component={DeathStack}/>
            <Tab.Screen name="Death" component={QuoteStack}/>
        </Tab.Navigator>
    );
}