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
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 28,
              marginBottom: 10
            }}
          >Reviews</Text>
          {this.diplayReviews()}
        </View>
      </View>
    );
  }

  diplayReviews = () => {

    let reviews = this.props.navigation.state.params.food.reviews;

    console.log(reviews);

    if (!reviews) {
      return <Text>There are no reviews</Text>;
    }

    return (
      <FlatList
        data={reviews}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => {

          return <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
            <Text>Rating: {item.rating}/5</Text>
            <Text>{item.text}</Text>
          </View>
        }}
        extraData={this.state}
        contentContainerStyle={{}}
      />
    
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
