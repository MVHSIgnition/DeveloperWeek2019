import React from 'react';
import { StyleSheet, Linking } from 'react-native';

import {
  View,
  FlatList,
  Text,
  Image,
  Button
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
          <View>
            <Image
              source={{
                uri: this.props.navigation.state.params.food.img
              }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 8,
                marginBottom: 10
              }}
            />
            <Text
              style={{
              }}
            >Fast-food chain offering Mexican fare, including design-your-own burritos, tacos &nbsp; bowls.</Text>
          </View>
          <Button
            onPress={() => {
              Linking.openURL(this.props.navigation.state.params.food.postmatesLink);
            }}
            title="Order from this location on Postmates"
            style={{
              marginTop: 20
            }}
          />
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              marginTop: 28,
              marginBottom: 2
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

    let avgRating = 0;
    for (let i = 0; i < reviews.length; i++) {
      avgRating += reviews[i].calcRating;
    }

    avgRating /= reviews.length;

    let posReviews = reviews.filter(r => r.calcRating >= avgRating);
    let negReviews = reviews.filter(r => r.calcRating <= avgRating);

    return (
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10
          }}
        >Positive Reviews</Text>
        <FlatList
          data={posReviews}
          keyExtractor={item => item.name}
          renderItem={({ item, index }) => {

            return <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
              <Text style={{ marginLeft: 10 }}>Rating: {item.calcRating}/5</Text>
              <Text style={{ marginLeft: 10 }}>{item.text}</Text>
            </View>
          }}
          extraData={this.state}
          contentContainerStyle={{}}
        />
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10
          }}>Negative Reviews</Text>
        <FlatList
          data={negReviews}
          keyExtractor={item => item.name}
          renderItem={({ item, index }) => {
            return <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
              <Text style={{ marginLeft: 10 }}>Rating: {item.calcRating}/5</Text>
              <Text style={{ marginLeft: 10 }}>{item.text}</Text>
            </View>
          }}
          extraData={this.state}
          contentContainerStyle={{}}
        />
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
