import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContactList} from '../screens/ContactList';
import {Theme} from '../config/theme/themeProvider';

export type MainStackParamList = {
  ContactList: undefined;
  ContactDetails: undefined;
};

export default function Screens() {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{
            title: 'Jenius Contact',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
