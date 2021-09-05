import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Setting = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'orange', flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('MyProfile');
        }}>
        <Text style={{fontSize: 30}}>뒤로 </Text>
      </Pressable>
    </View>
  );
};

export default Setting;
