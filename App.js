
import React from 'react';
import Start from './src/pages/Start';
import Rules from './src/pages/Rules';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar color="ligth" />
    <Rules/>
    </>
  )
}

