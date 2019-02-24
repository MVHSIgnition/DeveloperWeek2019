import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native';

import {
  View,
  FlatList,
  Text,
  Image
} from 'react-native';



export default class FoodScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.state.params.food.name
    }
  }

  render() {

    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
