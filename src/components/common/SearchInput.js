import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {COLORS, ICONS} from '../../assets';

const SearchInput = (props) => {
   
  return (
    <View style={styles.inputContainer}>
      <ICONS.SearchIcon />

      <TextInput
        {...props}
        placeholderTextColor={COLORS.black}
        placeholder="Search..."
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

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
