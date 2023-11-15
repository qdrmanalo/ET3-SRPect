import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import LabeledInputBox from '../components/labeledInputBox';
import SubbedHeader from '../components/subbedHeader';
import SubbedButton from '../components/subbedButton';

export default function LoginScreen() {

  const [loadedFonts] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SubbedHeader header='Welcome Shoppers!'/>
      </View>
      <View style={styles.inputContainer}>
        <LabeledInputBox label='Email / Username' placeholder='Enter your email or username'/>
        <LabeledInputBox label='Password' placeholder='Enter your password' hide='true'/>
      </View>
      <View style={styles.buttonContainer}>
        <SubbedButton 
          text='Login' 
          subText="Don't have an account? " 
          subTextButton='Sign Up'
          dest='Home'
          subDest='Signup'
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FF',

  },
  headerContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 2,
  }
});
