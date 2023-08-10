import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type InputIMCScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const InputIMC: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [weightStatus, setWeightStatus] = useState<string>('');

  const navigation = useNavigation<InputIMCScreenNavigationProp>();

  const calculateIMC = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100; 

      
      const imc = weightInKg / (heightInMeters * heightInMeters);
      
      
      if (imc < 18.5) {
        setWeightStatus('Muy delgado');
      } else if (imc >= 18.5 && imc <= 24.9) {
        setWeightStatus('Peso normal');
      } else if (imc >= 25 && imc <= 29.9) {
        setWeightStatus('Sobrepeso');
      } else {
        setWeightStatus('Obeso');
      }

      navigation.navigate('Resultado', { imc });
    }
  };

  return (
    <ImageBackground
      source={require('../assets/icon.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}> Calculo</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Weight (kg):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => setWeight(text)}
              value={weight}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Height (cm):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => setHeight(text)}
              value={height}
            />
          </View>

          <TouchableOpacity style={styles.calculateButton} onPress={calculateIMC}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          {weightStatus ? (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Status:</Text>
              <Text style={styles.result}>{weightStatus}</Text>
            </View>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    height: 60,
    width: 300,
    borderColor: '#fff',
    borderWidth: 4,
    paddingHorizontal: 12,
    color: '#fff',
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 55,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
});

export default InputIMC;
