import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';
import HomePage from './src/pages/home';
import AccountPage from './src/pages/account';
import GlobalStyles from './assets/fonts';

export default function App() {
  const Stack = createStackNavigator();
  return (
      <>
      <GlobalStyles />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: false
            }}
            name="login" component={LoginPage}
          />

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: false
            }}
            name="home" component={HomePage} />

            <Stack.Screen
              options={{
                headerTransparent: true,
                headerShown: false
              }}
              name="account" component={AccountPage} />

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: false
            }}
            name="register" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'LeagueSpartan-Black'
  },
});
