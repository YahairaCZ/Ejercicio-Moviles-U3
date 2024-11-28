import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de Inicio</Text>
        <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')} 
        />
      </View>
    );

  }

export default HomeScreen;

