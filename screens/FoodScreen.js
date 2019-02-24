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

  render = () => {

    return (
      <View>
        <View
          style={{
            padding: 10
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              marginBottom: 10
            }}
          >{this.props.navigation.state.params.food.name}</Text>
          <Image
            source={{
              uri: this.props.navigation.state.params.food.img
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 8,
            }}
          />
          <FlatList
            data={this.props.navigation.state.params.food.reviews}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    );
  }

  diplayReviews = () => {
    
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingTop: 15,
  backgroundColor: '#fff',
  },
});
