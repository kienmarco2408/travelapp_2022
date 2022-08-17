import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React from 'react';
import SearchBox from '../screenComponent/SearchBox';
import { useFonts } from 'expo-font';
import Stories from '../screenComponent/Stories';
import Post from '../screenComponent/Post';
import PostSecond from '../screenComponent/Post_1';
import Categories from '../screenComponent/Categories';

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
      <View style={{ paddingTop: 16, paddingBottom: 50 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <SearchBox />
          <Text
            style={{
              marginLeft: 16,
              marginTop: 20,
              fontFamily: 'Poppins_Medium',
              color: '#107AF5',
              fontSize: 16,
            }}
          >
            Story
          </Text>
          <Stories />
          <Post />
          <Text
            style={{
              marginLeft: 16,
              fontFamily: 'Poppins_Medium',
              color: '#107AF5',
              fontSize: 16,
            }}
          >
            Best Rating
          </Text>
          <Categories />
          <View style={{ marginTop: 16 }}>
            <PostSecond />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
