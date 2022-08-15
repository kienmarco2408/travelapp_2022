import { View, Text } from 'react-native';
import React from 'react';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'Kathryn Murphy',
      postPersonImage: require('../../storage/images/avt_7.jpg'),
      postImage: require('../../storage/images/post_1.jpg'),
      likes: 654,
      isLike: false,
    },
    {
      postTitle: 'Darlene Robertson',
      postPersonImage: require('../../storage/images/avt_8.jpg'),
      postImage: require('../../storage/images/post_2.jpg'),
      likes: 654,
      isLike: false,
    },
    {
      postTitle: 'Marvin McKinney',
      postPersonImage: require('../../storage/images/avt_9.jpg'),
      postImage: require('../../storage/images/post_3.jpg'),
      likes: 654,
      isLike: false,
    },
    {
      postTitle: 'Floyd Miles',
      postPersonImage: require('../../storage/images/avt_10.jpg'),
      postImage: require('../../storage/images/post_4.jpg'),
      likes: 654,
      isLike: false,
    },
  ];
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;
