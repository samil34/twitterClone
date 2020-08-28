import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import FirstScreen from './screens/Auth/FirstScreen';
import Home from './screens/Home/Home';
import { navigationRef } from './RootNavigation';

import { LOCAL_AUTH_ID, USER } from './actions/types';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

function Router(props) {
    return ( //referans ref dediğimiz
        <NavigationContainer ref={navigationRef}> 
            <Stack.Navigator initialRouteName='FirstScreen'>
                
            <Stack.Screen 
                name="FirstScreen" 
                component={FirstScreen}
                options={({ navigation, route }) => ({ 
                    title: 'FirstScreen',
                    headerShown: false
                    
                })}
               
                />


                <Stack.Screen 
                name="Login" 
                component={Login}
                options={({ navigation, route }) => ({ 
                    title: 'Login',
                    headerShown: false //üst barı kapatmaı sağlıyor
                    
                })}
               
                />
                
                
                <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{ title: 'Register',headerShown: false}}
                />

                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'Home'}}
                />

            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;