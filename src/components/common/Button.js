import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    color: '#008BAA',
    borderColor: '#008BAA',
    borderWidth: 2,
    marginHorizontal: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#008BAA',
  },
});
