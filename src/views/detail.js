import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';

function Detail({navigation}) {
  let route = useRoute();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Text>{route.params.user}</Text>
      <Button
        title="Referral"
        onPress={function () {
          navigation.navigate('referral');
        }}></Button>
    </View>
  );
}

export default Detail;
