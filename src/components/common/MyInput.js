import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../assets';

const MyInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        placeholderTextColor={COLORS.black}
       
        style={styles.input}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.lightGrey,
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
  },
  input: {
    marginLeft: 13,
    width: '90%',
    color: COLORS.black,
  },
});
