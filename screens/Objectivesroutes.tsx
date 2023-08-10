import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GanarFuerza from './Objetivos físicos/GanarFuerza';
import GanarMusculo from './Objetivos físicos/GanarMusculo';
import MejorarResistencia from './Objetivos físicos/MejorarResistencia';
import PerderPeso from './Objetivos físicos/PerderPeso';

const Stack = createStackNavigator();

const ObjectivesRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerderPeso" component={PerderPeso} />
      <Stack.Screen name="GanarMusculo" component={GanarMusculo} />
      <Stack.Screen name="MejorarResistencia" component={MejorarResistencia} />
      <Stack.Screen name="GanarFuerza" component={GanarFuerza} />
    </Stack.Navigator>
  );
};

export default ObjectivesRoutes;
