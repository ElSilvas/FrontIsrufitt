import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Picker } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import axios from 'axios';

type ResultadoScreenRouteProp = RouteProp<RootStackParamList, 'Resultado'>;


const Resultado: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<ResultadoScreenRouteProp>();
  const imc = route.params.imc;
  const [selectedObjective, setSelectedObjective] = useState<string | { objectiveData: any }>('');
  const objetivosFisicos = [
    'Perder peso',
    'Ganar músculo',
    'Mejorar resistencia',
    'Ganar fuerza',
  ];

  const getIMCClassification = (imc: number) => {
    if (imc < 18.5) {
      return 'Muy delgado';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obeso';
    }
  };

  const goToObjectivePage = async () => {
    if (typeof selectedObjective === 'string') {
      try {
        const response = await axios.get(
          `URL_DE_TU_API/objective/${selectedObjective}`
        );
        const data = response.data; // Aquí obtienes los datos de la rutina y dieta
  
        // Pasar los datos a la siguiente pantalla y navegar
        navigation.navigate(selectedObjective, { objectiveData: data });
      } catch (error) {
        console.error('Error fetching objective data:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.imcText}>Tu IMC es: {imc.toFixed(2)}</Text>
      <Text style={styles.imcClassification}>Status: {getIMCClassification(imc)}</Text>

<Picker
  selectedValue={selectedObjective}
  style={styles.picker}
  onValueChange={(itemValue) => setSelectedObjective(itemValue)}
>
  <Picker.Item label="Selecciona un objetivo físico" value="" />
  {objetivosFisicos.map((objective, index) => (
    <Picker.Item key={index} label={objective} value={objective} />
  ))}
</Picker>

      <Button title="Ver rutina y dieta" onPress={goToObjectivePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imcText: {
    fontSize: 20,
    marginBottom: 8,
  },
  imcClassification: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  picker: {
    width: '80%',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
});

export default Resultado;
