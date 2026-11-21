import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
      <ProfileScreen />
      {/* <HomeScreen /> */}
      <StatusBar style="dark" />
    </>
  );
}