import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PostSecond = () => {
  const postInfo = [
    {
      postTitle: 'Marvin McKinney',
      postPersonImage: require('../storage/images/avt_9.jpg'),
      postImage: require('../storage/images/post_3.jpg'),
      address: 'Beach Caribbean',
      likes: 654,
      rate: 4.5,
      personRate: 326,
      likes: 654,
      isSave: false,
      isLike: false,
    },
    {
      postTitle: 'Gabriella Trevino',
      postPersonImage: require('../storage/images/avt_10.jpg'),
      postImage: require('../storage/images/post_4.jpg'),
      address: 'Shang Hai',
      likes: 654,
      rate: 4.5,
      personRate: 326,
      likes: 654,
      isSave: false,
      isLike: false,
    },
  ];
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLike);
        const [save, setSave] = useState(data.isSave);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={data.postPersonImage}
                  style={{ width: 48, height: 48, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 16 }}>
                  <Text style={{ fontSize: 15, fontFamily: 'Poppins_Medium' }}>
                    {data.postTitle}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins_Light',
                      color: '#787878',
                      fontSize: 12,
                    }}
                  >
                    {data.address}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setSave(!save)}>
                <Ionicons
                  name={save ? 'bookmark' : 'bookmark-outline'}
                  style={{
                    fontSize: 25,
                    paddingLeft: 120,
                    color: save ? '#FB7A41' : '#FB7A41',
                  }}
                />
              </TouchableOpacity>

              <Feather
                name="more-horizontal"
                style={{ fontSize: 20, color: '#FB7A41' }}
              />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: '92%', height: 200, borderRadius: 6 }}
              />
            </View>
            <View style={{ paddingLeft: 16, paddingTop: 16 }}>
              <Text
                style={{
                  fontFamily: 'Poppins_Medium',
                  fontSize: 16,
                  paddingVertical: 2,
                }}
              >
                Whale Watching Tour
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  fontFamily: 'Poppins_Light',
                }}
              >
                <FontAwesome
                  name="star"
                  style={{
                    color: '#F59D1A',
                    top: 2,
                    paddingRight: 5,
                    fontSize: 14,
                  }}
                />
                <Text style={{ color: '#F59D1A', fontSize: 14 }}>
                  {data.rate} ({data.personRate})
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 16,
                }}
              >
                <Text
                  style={{
                    marginTop: 16,
                    marginRight: 227,
                    color: '#787878',
                    fontFamily: 'Poppins_Light',
                  }}
                >
                  {like ? data.likes + 1 : data.likes} likes
                </Text>
                <Text style={{ color: '#787878', fontFamily: 'Poppins_Light' }}>
                  1022 comment
                </Text>
                <View />
              </View>
              <Text style={{ paddingHorizontal: 2, color: '#787878' }}>
                ───────────────────────────
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 5,
                }}
              >
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'like1' : 'like2'}
                    style={{
                      paddingRight: 10,
                      fontSize: 25,
                      color: like ? '#FB7A41' : '#FB7A41',
                    }}
                  />
                </TouchableOpacity>
                <Text style={{ color: '#FB7A41' }}>Like</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity>
                  <Ionicons
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 25, paddingRight: 10, color: '#FB7A41' }}
                  />
                </TouchableOpacity>
                <Text style={{ color: '#FB7A41' }}>Comment</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PostSecond;
