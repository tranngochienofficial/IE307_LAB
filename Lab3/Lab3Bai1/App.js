import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthorStack from './src/stack._navigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthorStack />
    </NavigationContainer>
  );
}
