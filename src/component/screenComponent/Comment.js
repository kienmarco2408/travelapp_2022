import { View, Text, Image } from 'react-native';
import React from 'react';

const Comment = () => {
  const comment = [
    {
      id: 1,
      avt: require('../storage/images/avt_1.jpg'),
      user: 'Jenna Bradley',
      hour: '4 hours',
      content:
        'Flipping the cassette while reading/examining the fold-out cover 😁',
    },
    {
      id: 2,
      avt: require('../storage/images/avt_2.jpg'),
      user: 'Taryn Aguirre',
      hour: '4 hours',
      content:
        'Flipping the cassette while reading/examining the fold-out cover 😁',
    },
    {
      id: 3,
      avt: require('../storage/images/avt_3.jpg'),
      user: 'Patience Conway',
      hour: '4 hours',
      content:
        'Flipping the cassette while reading/examining the fold-out cover 😁',
    },
    {
      id: 4,
      avt: require('../storage/images/avt_4.jpg'),
      user: 'Chace Hays',
      hour: '4 hours',
      content:
        'Flipping the cassette while reading/examining the fold-out cover 😁',
    },
    {
      id: 5,
      avt: require('../storage/images/avt_5.jpg'),
      user: 'Kamora Michael',
      hour: '4 hours',
      content:
        'Flipping the cassette while reading/examining the fold-out cover 😁',
    },
  ];
  return (
    <View>
      {comment.map((data, index) => {
        return (
          <View
            style={{
              height: 36,
              width: 344,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}
          >
            <Image
              source={data.avt}
              style={{ width: 32, height: 32, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 16 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Poppins_Medium' }}>
                {data.user}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins_Light',
                  color: '#787878',
                  fontSize: 10,
                }}
              >
                {data.hour}
              </Text>
            </View>
            <Text
              style={{
                width: 221,
                height: 36,
                fontSize: 12,
                marginLeft: 4,

                fontFamily: 'Poppins_Light',
                lineHeight: 18,
                letterSpacing: -0.3,
              }}
            >
              {data.content}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Comment;
