import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import HeaderSRP from '../components/headerSRP';

function ImageButton (props) {
  return (
    <TouchableOpacity
      style={styles.buttonImage}
    >
      <Image 
        style={styles.image}
        source={props.source}
      />
      <Text style={styles.buttonText}>{props.subtitle}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen({}) {
  const [loadedFonts] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Bold': require('../assets/fonts/Manrope-Bold.ttf'),
    'Poppins-BlackItalic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  })

  return (
    <View style={styles.container}>
        <HeaderSRP/>
        <View style={styles.menuContainer}>
            <Text style={styles.titleText}>Products</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.firstRow}>
                <ImageButton source={require('../assets/canned.png')} subtitle='Canned Foods'/>
                <ImageButton source={require('../assets/dairy.png')} subtitle='Dairy'/>
                <ImageButton source={require('../assets/snack.png')} subtitle='Snacks'/>
                <ImageButton source={require('../assets/frozen_foods.png')} subtitle='Frozen Foods'/>
              </View>
              <View style={styles.secondRow}>
                <TouchableOpacity
                  style={styles.otherButton}
                >
                  <Image 
                    style={styles.otherImage}
                    source={require('../assets/others.png')}
                  />
                  <Text style={styles.otherText}>Others</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  menuContainer: {
    flex: 5,
  },
  titleText: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 22,
    padding: '5%',
  },
  buttonsContainer: {
    flex: 1,
  },
  firstRow: {
    flex: 12,
    flexWrap: 'wrap',
    alignContent: 'center',
    gap: '5%',
  },
  buttonImage: {
    backgroundColor: '#FFF',
    height: '45%',
    width: '40%',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    resizeMode: 'cover',
    height: '85%',
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    alignSelf: 'center',
  },
  secondRow: {
    flex: 7,
    alignItems: 'center',
  },
  otherButton: {
    height: '80%',
    width: '85%',
    padding: '5%',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherImage: {
    resizeMode: 'center',
    height: '90%',
    width: '40%',
  },
  otherText: {
    color: '#000',
    fontFamily: 'Manrope-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
});