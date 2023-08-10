import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import Resultado from './screens/Resultado';
import InputIMC from './components/InputIMC'; 
import ObjectivesRoutes from './screens/Objectivesroutes';
import { ObjectiveData } from './screens/types';

const Stack = createStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Rutina: undefined;
  Resultado: { imc: number };
  InputIMC: undefined;
  OtraPagina: undefined;
  PerderPeso: { objectiveData: ObjectiveData }; 
  GanarMusculo: { objectiveData: ObjectiveData };
  MejorarResistencia: { objectiveData: ObjectiveData };
  GanarFuerza: { objectiveData: ObjectiveData };
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
  
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="InputIMC" component={InputIMC} />
        <Stack.Screen name="Objectives" component={ObjectivesRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

