import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import Styles from './utils/Style';
import { TabsNavigator } from './utils/Navigation';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import appReducer from './store/Reducers';
const rootReducer = combineReducers({
  characters: appReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <TabsNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}