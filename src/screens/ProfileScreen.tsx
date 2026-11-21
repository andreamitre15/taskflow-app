import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Mi Perfil</Text>
     
      <ProfileCard name="Andrea Mitre" role="Desarrolladora" image="https://i.pravatar.cc/150?img=1" isActive={true} />
       <ProfileCard name="Abril C" role="Desarrolladora" image="https://i.pravatar.cc/150?img=12" isActive={false} />
        <ProfileCard name="Juan Perez" role="Desarrolladora" image="https://i.pravatar.cc/150?img=14" isActive={true} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    paddingTop: 60,
  },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 20 },
});