import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';

const DetailPost = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'red',
              width: 428,
              height: 428,
            }}
          >
            <Image style={{}} />
          </View>
          <View
            style={{
              borderRadius: 15,
              marginHorizontal: 10,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                backgroundColor: 'yellow',
                width: 348,
                height: 40,
                marginTop: 24,
                marginHorizontal: 24,
              }}
            ></View>
            <View
              style={{
                width: 218,
                height: 75,
                backgroundColor: 'blue',
                marginTop: 16,
                marginLeft: 24,
              }}
            ></View>
            <View
              style={{
                backgroundColor: 'green',
                width: 140,
                height: 30,
                marginTop: 16,
                marginLeft: 24,
              }}
            ></View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailPost;
