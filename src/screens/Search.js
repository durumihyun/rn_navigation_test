import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Search = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Newspeed');
        }}>
        <Text style={{fontSize: 30}}>서치</Text>
      </Pressable>
    </View>
  );
};

export default Search;
