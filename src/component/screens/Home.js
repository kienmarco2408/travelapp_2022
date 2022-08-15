import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import SearchBox from '../screenComponent/SearchBox';
import { useFonts } from 'expo-font';
import Stories from '../screenComponent/Stories';

const Home = () => {
  const [loaded] = useFonts({
    Poppins_Light: require('../../../assets/font/Poppins/Poppins-Light.ttf'),
    Poppins_Medium: require('../../../assets/font/Poppins/Poppins-Medium.ttf'),
    Poppins_Bold: require('../../../assets/font/Poppins/Poppins-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View style={{ paddingTop: 26 }}>
        <SearchBox />
        <Text
          style={{
            marginLeft: 16,
            marginTop: 32,
            fontFamily: 'Poppins_Medium',
            color: '#107AF5',
            fontSize: 16,
          }}
        >
          Story
        </Text>
        <Stories />
      </View>
    </SafeAreaView>
  );
};

export default Home;
