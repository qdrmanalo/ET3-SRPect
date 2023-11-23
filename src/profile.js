import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HeaderSRP from '../components/headerSRP';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderSRP/>
      </View>
      <View style={styles.menuContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  headerContainer: {
    flex: 1,
  },
  menuContainer: {
    flex: 5,
  },
});