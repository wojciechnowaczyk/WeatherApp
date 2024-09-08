/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {MainStack} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/theme';
import {TemperatureUnitsProvider} from './src/hooks/useTemperatureUnits';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <TemperatureUnitsProvider>
          <MainStack />
        </TemperatureUnitsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
