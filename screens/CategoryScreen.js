import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import database from '../database';
import Picker from 'react-native-picker-select';

import {
  View,
  FlatList,
  Text,
  Image
} from 'react-native';



export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.state.params.category
    }
  }

  state = {
    sortBy: 'relevance'
  }

  renderItem = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Food', {
            food: item
          });
        }}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: 100,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
          padding: 10,
          borderColor: 'rgba(0, 0, 0, .2)',
          borderWidth: 1,
          borderRadius: 8,
          backgroundColor: '#fff',
          shadowColor: "#000",
          shadowOpacity: 0.07,
          shadowRadius: 2,
          shadowOffset: {
            height: 4,
            width: 3
          },
          elevation: 3,
        }}>
          <Image
            source={{
              uri: item.img
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
              marginRight: 8
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
            <Text>Price: {database.formatter.price(item.price)}</Text>
            <Text>Rating: {item.yelpRating}/5</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {

    let dataIndex = database.categories.findIndex(item => item.category == this.props.navigation.state.params.category);
    let data = database.categories[dataIndex].foods;

    if (this.state) {
      if (this.state.sortBy === 'price') {
        data.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (this.state.sortBy === 'rating') {
        data.sort((a, b) => {
          return b.yelpRating - a.yelpRating;
        });
      }
    }

    return (
      <View>
        <Picker
          items={[
            {
              label: 'Relevance',
              value: 'relevance'
            },
            {
              label: 'Price',
              value: 'price'
            },
            {
              label: 'Rating',
              value: 'rating'
            }
          ]}
          onValueChange={sortBy => this.setState({ sortBy })}
          placeholder={{}}
        />
        <FlatList
          contentContainerStyle={styles.mainList}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          extraData={this.state}
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
