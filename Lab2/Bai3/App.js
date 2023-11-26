import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthorStack from './author_stack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthorStack />
    </NavigationContainer>
  );
}
