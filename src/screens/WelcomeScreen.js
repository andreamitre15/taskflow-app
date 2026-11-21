import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>Checkpoint 1: Estructura Base</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.title,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: colors.subtitle,
  },
});