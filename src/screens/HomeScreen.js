// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleBackToLogin = () => {
    // Implement your logic here
    // You can navigate back to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button mode="contained" onPress={handleBackToLogin} style={styles.button}>
        Back to Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default HomeScreen;
