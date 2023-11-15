import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/splash';
import LoginScreen from './src/login';
import SignupScreen from './src/signup';
import HomeScreen from './src/home';
import SearchScreen from './src/search';
import HistoryScreen from './src/history';
import ProfileScreen from './src/profile';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
        <Screen name="Splash" component={SplashScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Signup" component={SignupScreen} />
        <Screen name="Home" component={HomeTabs} />
      </Navigator>
    </NavigationContainer>
  );
}