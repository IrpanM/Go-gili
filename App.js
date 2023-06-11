import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'react-native-magnus';

import { RootTabBar } from './components/GLobal/RootTabBar';
import ForgotPass from './screens/Auth/ForgotPass';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import GiliBoat from './screens/GiliBoat';
import FoodDetail from './screens/GiliFood/FoodDetail';
import GiliFood from './screens/GiliFood/GiliFood';
import MarketDetail from './screens/GiliFood/MarketDetail';
import GiliHorseCart from './screens/GiliHorseCart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
            </Stack.Group>

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="GiliBoat" component={GiliBoat} options={{ headerShown: false }} />
            </Stack.Group>

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="GiliFood" component={GiliFood} options={{ headerShown: false }} />
              <Stack.Screen name="MarketDetail" component={MarketDetail} options={{ headerShown: false }} />
              <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />
            </Stack.Group>

            <Stack.Group>
              <Stack.Screen name="Root" component={RootTabBar} options={{ headerShown: false }} />
              <Stack.Screen name="GiliHorseCart" component={GiliHorseCart} options={{ headerShown: false }} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}