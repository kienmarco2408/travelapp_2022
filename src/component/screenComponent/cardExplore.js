import { View, Text, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const CardExplore = () => {
  return (
    <View>
      <View style={{ width: 188, height: 273, borderWidth: 1 }}>
        <Image
          source={require('../storage/images/post_1.jpg')}
          style={{ width: 188, height: 188 }}
        />
        <View>
          <View>
            <Text>Whale Watching Tour</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>4 hours</Text>
            <FontAwesome
              name="circle"
              size={4}
              style={{ top: 6, color: '#787878' }}
            />
            <Text style={{ marginLeft: 10 }}>Los Angeles</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome
            name="star"
            style={{ top: 2.5, marginRight: 5, color: '#F59D1A' }}
          />
          <Text style={{ color: '#F59D1A' }}> 4.75 (214) </Text>
        </View>
      </View>
    </View>
  );
};

export default CardExplore;
