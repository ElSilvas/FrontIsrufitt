import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Input2Props {
  imageSource: any;
  text: string;
}

const Input2: React.FC<Input2Props> = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
});

export default Input2;


