/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import ActorSearchScreen from './src/screen/ActorSearchScreen';
import TitleSearchScreen from './src/screen/TitleSearchScreen';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TitleScreen from './src/screen/TitleScreen';
declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen 
          name="Details" 
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Actors" 
          component={ActorSearchScreen}
          options={({ navigation})=>({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <MaterialIcons name='home' size={30} style={{marginRight: 15}}/>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Titles" 
          component={TitleSearchScreen}
          options={({ navigation})=>({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <MaterialIcons name='home' size={30} style={{marginRight: 15}}/>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Title" 
          component={TitleScreen} 
          options={({ navigation})=>({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <MaterialIcons name='home' size={30} style={{marginRight: 15}}/>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
