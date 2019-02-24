import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CategoryScreen from '../screens/CategoryScreen';
import FoodScreen from '../screens/FoodScreen';

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
  Category: {
    screen: CategoryScreen
  },
  Food: {
    screen: FoodScreen
  }
}));