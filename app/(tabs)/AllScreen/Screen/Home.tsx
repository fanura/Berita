import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListPeople from '../Components/ListPeople';

export default function Home() {
  return (
    <View style={styles.container}>

      <ListPeople />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  appName: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
});
