import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function LabeledInputBox (props) {
  const {input, onChangeInput} = useState('');

  const [loadedFonts] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  return (
    <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          placeholder={props.placeholder}
          placeholderTextColor='#A1A1A1'
          secureTextEntry={props.hide}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 80,
    paddingHorizontal: '5%',
  },
  inputLabel: {
    color: '#0B1362',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  input: {
    color: '#000000', 
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    height: 45,
    width: '100%',
    padding: 15,
    background: 'white', 
    borderWidth: 1,
    borderRadius: 100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',  
    alignSelf: 'center',
  },
});
