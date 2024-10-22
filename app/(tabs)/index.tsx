import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/(tabs)/AllScreen/Screen/Home';
import UserDetail from '@/app/(tabs)/AllScreen/Screen/UserDetail';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Daftar Biodata' }} 
          />
          <Stack.Screen 
            name="UserDetail" 
            component={UserDetail} 
            options={{ title: 'User Detail' }} 
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
