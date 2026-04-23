import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShopScreen } from './src/screens/ShopScreen';

function App() {
  return (
    <SafeAreaProvider>
      <ShopScreen />
    </SafeAreaProvider> 
  );
}

export default App;
