import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function DetailsScreen() {
  const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de Detalles</Text>
        <Button title="Go to Settings"
        onPress={() => navigation.navigate('Setings')} 
        />
      </View>
    );
  }

export default DetailsScreen;