import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header'
import Home from './src/screens/Home'


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Header/>
      <Home />
    </>
  );
}