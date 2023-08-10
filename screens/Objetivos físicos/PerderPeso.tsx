import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ObjectiveScreenRouteProp = RouteProp<RootStackParamList, 'PerderPeso'>;

const PerderPeso: React.FC = () => {
  const route = useRoute<ObjectiveScreenRouteProp>();
  
  // Comprobar si route.params está definido antes de acceder a sus propiedades
  if (!route.params) {
    return <Text>Error: Los parámetros de la ruta no están definidos.</Text>;
  }
  
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

export default PerderPeso;
