import * as React from 'react';
import { Text, View, Button, StyleSheet, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommonActions } from '@react-navigation/native';




const HomeScreen = ({navigation}:any)=>{


    return (
        <View style={styles.container}>
            <MaterialIcons name='movie' size={100}/>
            <Text style={styles.welcomeText}>IMDb API Caller</Text>
            <Text style={{textDecorationColor: 'white'}}>
                {
                    setTimeout(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                              index: 1,
                              routes: [
                                { name: 'Details' },
                              ],
                            })
                          );
                    }, 3000, 'funky')
                }
            </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    welcomeText: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default HomeScreen;