import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar, StyleSheet, Image, Platform, View, Text, ImageBackground, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabTwoScreen() {
  return (
    <View>
       <StatusBar barStyle={'dark-content'} backgroundColor='#FAFAFA'/>

            {/* Nama & Deskripsi */}
            <View style= {{marginTop: 50}}>
        <Text  style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
            FAIZAL NUR ALAMSYAH
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15, color: '#000000'}}>
            Lahir 12 Mei 2002
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15, color: '#000000'}}>
            Kota Malang, Jawa Timur, Indonesia
        </Text>
        <Image
        style={{
          width: 100, 
          height: 100, 
          borderRadius: 100/2, 
          borderWidth: 3,
          borderColor : '#FFFFFF',
          alignSelf : 'center',
          zIndex: 2
        }}
        source={require('C:/Users/faiza/Berita/assets/images/foto.jpg')}
        />
      </View>
    
    {/* Biodata */}
    <ScrollView>
      <View style={{marginLeft: 20, marginTop: 16, marginBottom:120}}>
      {/* Data Pendidikan */}
            <View>
                  <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                flex:1}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000000'}}>
                        PENDIDIKAN
                    </Text>
                </View>
                <View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                        Universitas Negeri Malang 2020-2024
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                        S1 Teknik Informatika
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                marginTop : 8,
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                        SMAN 7 MALANG 2017-2020
                    </Text>
                </View>
                </View>
            </View>
      {/* Daftar Proyek */}
            <View style={{
                    marginTop: 15
                  }}>
                  <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000000'}}>
                        DAFTAR PROYEK
                    </Text>
                </View>
                <View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Sebagian dari proyek ini dapat diakses melalui repository github pribadi, beberapa diantaranya masih dalam tahap pengembangan dan diperbarui secara berkala.
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    Game Luar Angkasa Buraq G13
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Proyek tugas akhir mata kuliah Grafika Komputer untuk membuat permainan sederhana menggunakan penerapan raster images dan linear algebra. Dibuat menggunakan software godot yang diolah dengan C++.
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    Scoreboard Basket Dengan Menggunakan Javascript
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Proyek tugas akhir untuk mata kuliah pemrograman berbasis obyek. Program ini menghitung skor point permainan basket dengan poin - poin berbeda menggunakan Javascript.
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    Game Lingkungan Cook & Plant
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Game ini adalah proyek terakhir magang dan studi independent kampus merdeka saya yang dikerjakan bersama 4 anggota lainnya. Game ini merupakan game pengelolaan makanan dan sampah yang dihasilkan agar tidak merusak lingkungan. Game ini dikembangkan dengan Unity menggunakan bahasa C#.
                    </Text>
                </View>
                </View>
            </View>
      {/* Pengalaman Organisasi dan Magang */}
            <View style={{
                    marginTop: 15
                  }}>
                  <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000000'}}>
                        PENGALAMAN ORGANISASI DAN MAGANG
                    </Text>
                </View>
                <View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    Lembaga Pers Mahasiswa Siar (2022)
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 4, 
                                flex:1}}>
                    <Text style={{fontSize: 16, color: '#000000'}}>
                    Redaksi Pelaksana Online
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Membantu pemeliharaan website dan kontrol kualitas artikel yang dipublikasikan LPM Siar, serta melakukan personal branding LPM Siar. Teknologi yang digunakan selama magang meliputi Wordpress, Canva, WPS.
                    </Text>
                </View>
                  </View>
                  <View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    PT Impactbyte Teknologi Edukasi (2022)
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 4, 
                                flex:1}}>
                    <Text style={{fontSize: 16, color: '#000000'}}>
                    Peserta MSIB angkatan 3
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Belajar cara pengembangan game mulai dari pemrograman, pendesainan sampai pemasaran ke investor. Setelah pembelajaran selesai, saya dikelompokkan bersama 4 orang lainnya untuk membuat game bertema lingkungan yang berjudul Cook & Plant.
                    </Text>
                </View>
                  </View>
                  <View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 18, color: '#000000'}}>
                    Digistar Studio (2023)
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginTop: 4, 
                                flex:1}}>
                    <Text style={{fontSize: 16, color: '#000000'}}>
                    Game Developer
                    </Text>
                </View>
                <View style={{
                                justifyContent: 'center', 
                                marginLeft: 10,
                                marginBottom: 10, 
                                flex:1}}>
                    <Text style={{fontSize: 14, color: '#000000'}}>
                    Melakukan pembuatan game AR berbasis proyek akhir. Game AR yang saya buat berkenaan dengan ujicoba Sains. Teknologi yang digunakan selama magang meliputi Unity, Vuforia.
                    </Text>
                </View>
                  </View>
            </View>


      </View>
    </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 20
,  },
});
