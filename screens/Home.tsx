import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import InputIMC from '../components/InputIMC';
// import ButtonRutina from '../components/ButtonRutina';


const Home: React.FC<any> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('rutina');
  };

  return (
    <View style={styles.container}>
        <InputIMC></InputIMC>
      {/* <ButtonRutina title="Go to Rutina" onPress={handlePress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

