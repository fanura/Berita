import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ListPeople() {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const renderUserCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('UserDetail', { user: item })}
      >
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.website}>{item.website}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: '#666',
    marginBottom: 5,
  },
  username: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  website: {
    color: 'blue',
  },
});
