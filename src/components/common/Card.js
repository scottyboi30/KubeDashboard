import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = props => {
  return <View style={styles.cardContainer}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 10,
    marginHorizontal: 5,
    borderColor: '#fff',
  },
});
