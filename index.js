/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainPage from './src/pages/MainPage'
import HomeScreen from './src/components/HomeScreen'
import MyNavigation from './src/components/MyNavigation'
import DetailsScreen from './src/components/DetailsScreen'

AppRegistry.registerComponent(appName, () => MainPage);
