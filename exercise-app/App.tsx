import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
  const isLoaded = useCachedResources()
  
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
