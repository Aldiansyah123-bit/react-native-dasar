import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Unorderedlist from 'react-native-unordered-list';

const Referral = () => {
  return (
    <ScrollView style={styles.sectionContainer}>
      <Text style={styles.ajak}>Ajak Teman. Dapat Voucher</Text>
      <Text style={styles.voucher}>
        Dapatkan voucher potongan gratis untuk setiap teman yang mendaftar dan
        berbelanja di MeyerFood menggunakan program referral{' '}
        <Text style={{fontWeight: 'bold'}}>Undang Teman Kamu</Text> .
      </Text>
      <View style={styles.viewShadowTop}>
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
          <Icon name="users" style={styles.iconUser}></Icon>
          <View>
            <Text style={styles.iconText}>Nama Program </Text>
            <Text style={{fontWeight: 'bold'}}>Undangan Teman Kamu</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 20, marginBottom: 10, }}>
          <Icon name="calendar" style={styles.iconUser}></Icon>
          <View>
            <Text style={styles.iconText}>Nama Program</Text>
            <Text style={{fontWeight: 'bold'}}>Undangan Teman Kamu</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: '#D8D8D8', }}></View>
        <View style={styles.buttonText}>
          <Button title="Daftarkan Temanmu" color="#FD841F"></Button>
        </View>
      </View>
      <View style={styles.viewCardTop}>
        <Text style={styles.textCard}>Voucher yang Didapat</Text>
        <Text style={styles.voucherCard}>0 Voucher</Text>
        <Text style={styles.sediaCard}>Voucher tersedia</Text>
        <View style={{ height: 1, backgroundColor: '#D8D8D8', }}></View>
        <Text style={styles.textCardB}>Referral Kamu</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={styles.textCardc}>0</Text>
            <Text style={styles.textCardD}>Teman Bergabung</Text>
          </View>
          <Text style={styles.textCardE}>Lihat</Text>
        </View>
      </View>
      <View style={styles.viewCardSyarat}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textSyaratA}>Syarat & Ketentuan</Text>
          {/* <Button title="Syarat & Ketentuan"></Button>
          <Button title="Cara Penggunaan"></Button> */}
          <Text style={styles.textSyaratB}>Cara Penggunaan</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#D8D8D8', marginBottom: 15, }}></View>
        <View style={styles.syaratA}>
          <Unorderedlist bulletUnicode={0x2022} style={{fontSize: 20}}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              Penutupan akun hanya dapat di proses apabila sudah tidak ada
              transaksi yang berjalan di akun kamu, serta tidak memiliki
              tanggungan cicilan pinjaman online
            </Text>
            <View style={{ height: 1, backgroundColor: '#D8D8D8', marginTop: 15, marginBottom: 15, }}></View>
          </Unorderedlist>
        </View>
        <View style={styles.syaratA}>
          <Unorderedlist bulletUnicode={0x2022} style={{fontSize: 20}}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              Data email/nomor handphone pada akun yang sudah dinonaktifkan
              tidak dapat digunakan kembali atau didaftarkan pada akun lainnya.
            </Text>
            <View style={{ height: 1, backgroundColor: '#D8D8D8', marginTop: 15, marginBottom: 15, }}></View>
          </Unorderedlist>
        </View>
        <View style={styles.syaratA}>
          <Unorderedlist bulletUnicode={0x2022} style={{fontSize: 20}}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              Pastikan sudah menggunakan Poin Meyerfood yang kamu miliki.
            </Text>
            <View style={{ height: 1, backgroundColor: '#D8D8D8', marginTop: 15, marginBottom: 25, }}></View>
          </Unorderedlist>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 20,
  },
  ajak: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    marginTop: 50,
  },
  voucher: {
    color: '#000',
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  iconText: {
    color: '#000',
    fontSize: 12,
  },
  iconUser: {
    color: '#FD841F',
    fontSize: 16,
    marginRight: 15,
  },
  viewShadowTop: {
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 10,
  },
  viewCardTop: {
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 10,
    borderTopColor: '#FD841F',
    borderTopWidth: 6,
    paddingVertical: 5,
  },
  textCard: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  voucherCard: {
    textAlign: 'center',
    color: '#FD841F',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 7,
  },
  sediaCard: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 5,
  },
  textCardB: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 4,
    paddingHorizontal: 30,
  },
  textCardc: {
    color: '#FD841F',
    fontWeight: 'bold',
    backgroundColor: '#D8D8D8',
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  textCardD: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  textCardE: {
    color: '#FD841F',
    textAlign: 'right',
  },
  buttonText: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  viewCardSyarat: {
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 10,
  },
  textSyaratA: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#D8D8D8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 3,
    fontSize: 15,
  },
  textSyaratB: {
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 3,
    fontSize: 15,
  },
  syaratA: {
    paddingHorizontal: 20,
  },
});

export default Referral;
