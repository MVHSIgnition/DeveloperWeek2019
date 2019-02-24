import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CategoryScreen from '../screens/CategoryScreen';
import FoodScreen from '../screens/FoodScreen';
import RouteScreen from '../screens/RouteScreen';

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
  Category: {
    screen: CategoryScreen
  },
  Food: {
    screen: FoodScreen
  },
  Route: {
    screen: RouteScreen
  }
}));