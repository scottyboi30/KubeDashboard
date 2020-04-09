import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardSection = props => {
  return <View style={styles.cardSectionContainer}>{props.children}</View>;
};

export default CardSection;

const styles = StyleSheet.create({
  cardSectionContainer: {
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
  },
});
