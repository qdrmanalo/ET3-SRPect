import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function SubbedHeader(props) {

  const [loadedFonts] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.header}</Text>
      <Text style={styles.subHeaderText}>Shop Smart, Save Big, Never Overpay!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#A1A1A1'
  },
});
