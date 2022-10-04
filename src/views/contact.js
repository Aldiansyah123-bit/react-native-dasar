import {View, Text} from 'react-native';
import React from 'react';
// import { useRoute } from '@react-navigation/native';
import {NavigationContainer, useRoute} from '@react-navigation/native';

function Contact({navigation}) {
  let route = useRoute();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact</Text>
      <Text>{route.params.kontak}</Text>
    </View>
  );
}

export default Contact;
