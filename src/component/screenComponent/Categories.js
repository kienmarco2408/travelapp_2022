import { View, Text, Image } from 'react-native';
import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      img: require('../storage/images/cat_1.jpg'),
      title: 'New York City',
      location: 'New York, USA',
    },
    {
      id: 2,
      img: require('../storage/images/cat_2.jpg'),
      title: 'Big Ben',
      location: 'London, England',
    },
    {
      id: 3,
      img: require('../storage/images/cat_3.jpg'),
      title: 'Osaka Castle',
      location: 'Osaka, Japan',
    },
    {
      id: 4,
      img: require('../storage/images/cat_4.jpg'),
      title: 'Eiffel Tower',
      location: 'Paris, France',
    },
  ];

  return (
    <View>
      {categories.map((item, index) => {
        return <View key={index}></View>;
      })}
    </View>
  );
};

export default Categories;
