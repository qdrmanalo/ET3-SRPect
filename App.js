import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/splash';
import LoginScreen from './src/login';
import SignupScreen from './src/signup';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
        <Screen name="Splash" component={SplashScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Signup" component={SignupScreen} />
      </Navigator>
    </NavigationContainer>
  );
}