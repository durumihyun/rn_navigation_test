import React from 'react';
import {Pressable, Text, View} from 'react-native';

const MyProfile = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'orange', flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Text style={{fontSize: 30}}>프로필</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;
