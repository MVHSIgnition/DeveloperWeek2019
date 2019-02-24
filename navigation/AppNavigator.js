import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CategoryScreen from '../screens/CategoryScreen';

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
  Category: {
    screen: CategoryScreen
  }
}));