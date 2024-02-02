// LoginScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    // You can navigate to the home screen after successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Signup here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
