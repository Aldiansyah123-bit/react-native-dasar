import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import { Profile, storeAge, storeUser } from '../redux/action/userAction';
import axios from 'axios';

function HomeScreen({navigation, route}) {
  const user = useSelector(state => state.user);
  const [detail, setDetail] = useState('');
  const [info, setInfo] = useState('');
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  var profile = {
    name: 'Budi',
    age: 24,
    adress: 'Jl. Padma',
    phone: '08779704',
    nik: '168302',
  };
  var Detail = {
    schooll: 'SMA N1',
    address: 'Jl Mangga',
  };
  useEffect(
    function () {
      dispatch(Profile(profile));
    },
    [dispatch],
  );
  useEffect(
    function () {
      console.log('efeck masuk');
    },
    [info, detail],
  );

  let Object = {
    name: 'Bayu',
    age: 23,
    perusahaan: { PT: 'website', jasa: 'Web App' },
  };

  // AsyncStorage.setItem('object', JSON.stringify(Object), () => {
  //   AsyncStorage.getItem('object', (err, result) => {
  //     console.log(result);
  //   });
  // });
  // console.log(detail);
  const hiteAPI = async () => {
    const URL = 'http://192.168.0.118:8085/api/hrd/company'
    await axios.post(URL, {})
      .then(function (response) {
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
    })
  }
  return (
    <ScrollView style={styles.Container}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={{flex: 1}}>
          <Text style={styles.textHello}>Hello, Patrick Camary</Text>
          <Text style={styles.textWelcome}>Welcome to Baby Spa</Text>
        </View>
        <TouchableOpacity
          onPress={async function () {
            dispatch(storeAge('24'));
            setDetail('Andi');
            await AsyncStorage.setItem('object', JSON.stringify(Object));
            const object = await AsyncStorage.getItem('object');
            console.log(object);
          }}>
          <Icon name="bell" size={20} style={styles.iconNotif}></Icon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 15, marginBottom: 15}}
        onPress={function () {
          dispatch(storeUser('Andi'));
          setInfo('Hallo');
          setDetail('Andi');
        }}>
        <Image source={require('../assets/img/banner.png')} style={{height: 100, width: 350, borderRadius: 10}}></Image>
      </TouchableOpacity>
      <View>
        <Text style={styles.myMenu}>My Menu</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>
          <TouchableOpacity onPress={hiteAPI}>
            <View>
              <Icon name="home" size={15} style={styles.iconMenuHom}></Icon>
              <View>
                <Text style={styles.textMenu}>Home</Text>
                <Text style={styles.textMenu}>Treatment</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Icon name="envelope-open" size={15} style={styles.iconMenuHom}></Icon>
            <Text style={styles.textMenu}>Studio</Text>
            <Text style={styles.textMenu}>Treatment</Text>
          </View>
          <View>
            <Icon name="play" size={15} style={styles.iconMenuHom}></Icon>
            <Text style={styles.textMenu}>Online</Text>
            <Text style={styles.textMenu}>Class</Text>
          </View>
          <View>
            <Icon name="bars" size={15} style={styles.iconMenuHom}></Icon>
            <Text style={styles.textMenu}>Other</Text>
            <Text style={styles.textMenu}>Menu</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 17, }}>
        <Text style={styles.myMenu}>Little Baby Service's</Text>
        <Text style={styles.myMenuA}>See All</Text>
      </View>
      <View style={styles.viewShadowTop}>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 15, marginBottom: 15, }}>
          <Image source={require('../../assets/img/baby.png')} style={{ height: 60, width: 60 }}></Image>
          <View style={{marginLeft: 12}}>
            <Text style={styles.textTbaby}>Lactation Massage</Text>
            <Text style={styles.textRbaby}> Rp. 120.000</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="dribbble" style={styles.iconBaby}></Icon>
              <Text style={{marginLeft: 12}}>
                Discount 30% for first time order
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewShadowTop}>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 15, marginBottom: 15, }}>
          <Image source={require('../assets/img/baby.png')} style={{height: 60, width: 60}}></Image>
          <View style={{marginLeft: 12}}>
            <Text style={styles.textTbaby}>Constaption Massage</Text>
            <Text style={styles.textRbaby}>Rp. 125.000</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="dribbble" style={styles.iconBaby}></Icon>
              <Text style={{marginLeft: 12}}>
                Discount 30% for first time order
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textHello: {
    fontWeight: '700',
    color: '#000',
    fontSize: 20,
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  iconNotif: {
    color: '#FF74B1',
    fontWeight: 'bold',
    backgroundColor: '#FFD6EC',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  iconMenuHom: {
    color: '#FF74B1',
    fontWeight: 'bold',
    backgroundColor: '#FFD6EC',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 150,
    alignSelf: 'center',
  },
  textMenu: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  myMenu: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    marginTop: 10,
  },
  myMenuA: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 15,
    marginTop: 10,
  },
  viewShadowTop: {
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 10,
    borderRadius: 10,
  },
  iconBaby: {
    fontSize: 20,
    color: '#FF74B1',
  },
  textTbaby: {
    fontWeight: 'bold',
    color: '#000',
  },
  textRbaby: {
    marginTop: 6,
    marginBottom: 6,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
