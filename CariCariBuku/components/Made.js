import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Body } from './styled';

const Made = () => (
  <View style={styles.container}>
    <Body small>Final Project SanberCode</Body>
  </View>
);

export default Made;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
