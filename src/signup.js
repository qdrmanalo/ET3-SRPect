import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import LabeledInputBox from '../components/labeledInputBox';
import SubbedHeader from '../components/subbedHeader';
import SubbedButton from '../components/subbedButton';

export default function SignupScreen() {

  const [loadedFonts] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SubbedHeader header='Create an account'/>
      </View>
      <View style={styles.inputContainer}>
        <LabeledInputBox label='Username' placeholder='Enter your username'/>
        <LabeledInputBox label='Email Address' placeholder='Enter your email'/>
        <LabeledInputBox label='Create Password' placeholder='Enter your password' hide='true'/>
        <LabeledInputBox label='Confirm Password' placeholder='Enter your password' hide='true'/>
      </View>
      <View style={styles.buttonContainer}>
        <SubbedButton 
          text='Register' 
          subText="Already have an account? " 
          subTextButton='Log in'
          dest='Splash'
          subDest='Login'
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
    flex: 3,
  },
  buttonContainer: {
    flex: 2,
  }
});
