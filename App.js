import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/home';
import Detail from './src/views/detail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen from './src/views/Screen';
import Contact from './src/views/contact';
import Icon from 'react-native-vector-icons/FontAwesome';
import referral from './src/views/referral';
import {Provider} from 'react-redux';
import Store from './src/redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let kontak = 'Kontak Saya';
        let user = 'React Native';
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {
              utama: 'Halaman Home',
              user: 'React Native',
              kontak: 'Kontak Saya',
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        let icon;

        if (route.name == 'Home') {
          icon = 'home';
        } else if (route.name == 'Detail') {
          icon = 'info';
        } else if (route.name == 'Contact') {
          icon = 'phone';
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={icon}
              size={25}
              style={{
                color: isFocused ? '#673ab7' : '#222',
                textAlign: 'center',
                backgroundColor: '#FAFAFA',
              }}></Icon>
            <Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
                textAlign: 'center',
                backgroundColor: '#FAFAFA',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={Tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen name="screen" component={Screen} />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#FD841F',
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: 'white',
            }}
            name="referral"
            component={referral}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
