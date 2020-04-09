import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({value, placeholder, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#008BAA',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
  },
});
