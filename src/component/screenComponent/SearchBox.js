import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
      }}
    >
      <Ionicons
        name="search"
        style={{
          fontSize: 25,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 30,
          color: '#F9693B',
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#F9693B"
        style={{
          width: '94%',
          backgroundColor: '#FFFFFF',
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          padding: 10,
          paddingLeft: 60,
          fontFamily: 'Poppins_Medium',
          shadowOpacity: 0.25,
          shadowOffset: {
            width: 4,
            height: 4,
          },
        }}
      />
    </View>
  );
};

export default SearchBox;
