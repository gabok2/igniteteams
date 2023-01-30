import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Loading } from '@components/Loading';
import { NewGroup } from '@screens/NewGroup';
import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
import { Routes } from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <ThemeProvider theme={theme}>
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </>
      </ThemeProvider>
    </SafeAreaView>

  );
}