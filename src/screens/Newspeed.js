import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Newspeed = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'skyblue', flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('MyProfile');
        }}>
        <Text style={{fontSize: 30}}>뉴스피드ss되라되라</Text>
      </Pressable>
    </View>
  );
};

export default Newspeed;
