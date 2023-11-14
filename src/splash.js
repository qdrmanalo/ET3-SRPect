import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({ navigation }) {
  const [loadedFonts] = useFonts({
    'Manrope': require('../assets/fonts/Manrope-VariableFont_wght.ttf'),
    'Poppins': require('../assets/fonts/Poppins-BlackItalic.ttf'),
  })

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        </TouchableOpacity>
        <Text style={styles.logoTitle}>SRPect</Text>
        <Text style={styles.logoText}>Shop Smart, Save Big, Never Overpay!</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Tap the Logo!</Text>
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
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: 300,
    width: 300,
  },
  logoTitle: {
    fontFamily: 'Poppins',
    fontSize: 50,
  },
  logoText: {
    fontFamily:'Manrope',
    fontSize: 15,
    color: '#A1A1A1',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontFamily:'Manrope',
    fontSize: 15,
    color: '#A1A1A1',
  },
});