import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import CardExplore from '../screenComponent/cardExplore';

const Explore = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View style={{ marginLeft: 16, marginTop: 16 }}>
              <Text
                style={{
                  fontFamily: 'Poppins_Medium',

                  fontSize: 32,
                  letterSpacing: -0.3,
                  lineHeight: 48,
                  color: 'rgba(16, 122, 245, 1)',
                }}
              >
                Explore
              </Text>
            </View>
            <View style={{ marginTop: 32 }}>
              <CardExplore />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
