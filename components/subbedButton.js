import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function SubbedButton(props) {

  const [loadedFonts] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  const navigation = useNavigation();
  
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate(props.dest)}
        >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>
        {props.subText}
        <TouchableOpacity
          onPress={() => navigation.navigate(props.subDest)}
          >
          <Text style={styles.subButtonText}>{props.subTextButton}</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0B1362',
    borderRadius: 100,
    width: '80%',
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  subText: {
    color: '#A1A1A1',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  subButtonText: {
    color: '#8D5CB4',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});
