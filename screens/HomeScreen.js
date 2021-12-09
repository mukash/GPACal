import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const toGPACal = () => {
    navigation.navigate('GPACal');
  };
  const toCGPACal = () => {
    navigation.navigate('CGPACal');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#818cf8" />

      <View>
        <TouchableOpacity style={styles.btns} onPress={toGPACal}>
          <Text style={styles.textCol}>GPA Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns} onPress={toCGPACal}>
          <Text style={styles.textCol}>CGPA Calculator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    height: 70,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a5b4fc',
    marginBottom: 15,
    borderRadius: 50,
  },
  textCol: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default HomeScreen;
