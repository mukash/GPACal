import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CGPACalScreen = () => {
  const [ITCP, setITCP] = useState(0);
  const [CCN, setCCN] = useState(0);
  const [ML, setML] = useState(0);
  const [NS, setNS] = useState(0);

  const [obtainITCP, setObtainITCP] = useState(0);
  const [obtainCCN, setObtainCCN] = useState(0);
  const [obtainML, setObtainML] = useState(0);
  const [obtainNS, setObtainNS] = useState(0);
  const [result, setResult] = useState(0);
  const calculateGPA = () => {
    let weightedGradePoints =
      ITCP * obtainITCP + CCN * obtainCCN + ML * obtainML + NS * obtainNS;
    let totalSubCreds =
      parseInt(ITCP) + parseInt(CCN) + parseInt(ML) + parseInt(NS);

    totalGPA = weightedGradePoints / totalSubCreds;
    setResult(totalGPA);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.subName}>ITCP</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Total"
            keyboardType="numeric"
            onChangeText={val => {
              setITCP(val);
            }}
          />
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Obtain"
            keyboardType="numeric"
            onChangeText={val => setObtainITCP(val)}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.subName}>CCN</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Total"
            keyboardType="numeric"
            onChangeText={val => setCCN(val)}
          />
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Obtain"
            keyboardType="numeric"
            onChangeText={val => setObtainCCN(val)}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.subName}>ML</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Total"
            keyboardType="numeric"
            onChangeText={val => setML(val)}
          />
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Obtain"
            keyboardType="numeric"
            onChangeText={val => setObtainML(val)}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.subName}>NS</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Total"
            keyboardType="numeric"
            onChangeText={val => setNS(val)}
          />
        </View>
        <View style={styles.inputFields}>
          <TextInput
            maxLength={1}
            style={styles.input}
            placeholderTextColor="#8a8a8a"
            placeholder="Obtain"
            keyboardType="numeric"
            onChangeText={val => setObtainNS(val)}
          />
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btns} onPress={() => calculateGPA()}>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>Result: {result} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  textWrapper: {
    width: '20%',
  },
  inputFields: {
    backgroundColor: '#ffffff',
    width: '40%',
    marginLeft: 10,
  },

  subName: {
    color: 'black',
    fontSize: 20,
  },
  input: {
    color: 'black',
    borderLeftColor: '#a5b4fc',
    borderLeftWidth: 1,
  },
  btns: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a5b4fc',
    marginBottom: 15,
    borderRadius: 50,
  },
  btnText: {color: '#ffffff'},
  btnWrapper: {
    alignItems: 'center',
  },
  resultWrapper: {},
  resultText: {
    color: '#868686',
    fontSize: 30,
  },
});

export default CGPACalScreen;
