import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function HeaderSRP({}) {
  const [loadedFonts] = useFonts({
    'Poppins-BlackItalic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
  })

  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}><Text style={{color: '#00C2FF'}}>SRP</Text>ect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#0B1362',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'Poppins-BlackItalic', 
    fontSize: 50,
  },
});