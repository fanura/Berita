import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetail({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Company: {user.company.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
