import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const DetailScreen = ({navigation}:any)=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Actors')}>
            <Text>Search Actors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Titles')}>
            <Text>Search Titles</Text>
          </TouchableOpacity> */}
          <Button mode="contained" onPress={() => navigation.navigate('Actors')} style={styles.button}>
              <Text style ={styles.buttonText}>Search Actors</Text>
          </Button>
          <Text></Text>
          <Button mode="contained" onPress={() => navigation.navigate('Titles')} style={styles.button}>
              <Text style ={styles.buttonText}>Search Titles</Text>
          </Button>
        </View>
      );
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        margin: 10,
        padding: 2
    },
    buttonText: {
        fontSize: 20,
    }
});


export default DetailScreen;