import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ObjectiveScreenRouteProp = RouteProp<RootStackParamList, 'GanarFuerza'>;

const GanarFuerza: React.FC = () => {
  const route = useRoute<ObjectiveScreenRouteProp>();
  const objectiveData = route.params.objectiveData;

  // Utiliza objectiveData para mostrar la información en la pantalla
  // ...

  return (
    <View>
      <Text>Detalles de la rutina y la dieta para {objectiveData.objetivo}</Text>
      {/* Mostrar los detalles de la rutina y dieta aquí */}
    </View>
  );
};

export default GanarFuerza;
