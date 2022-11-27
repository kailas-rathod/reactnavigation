import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const onBoarding = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Homepage');
    }, 4000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>onBoarding</Text>
    </View>
  );
};

export default onBoarding;
