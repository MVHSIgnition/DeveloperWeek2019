import React from 'react';
import { StyleSheet } from 'react-native';

import database from '../database';
import { Button } from 'react-native';

import {
  View,
  FlatList,
  Text,
  Image,
  Picker
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

  renderItem({ item, index }) {

    return (
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
          <Text>Rating: {item.rating}/5</Text>
        </View>
      </View>
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
          return b.rating - a.rating;
        });
      }
    }

    return (
      <View>
        <Button
          onPress={() => {
            this.setState({
              sortBy: 'price'
            });
          }}
          title="Price"
          color="#4286f4"
          style={{
            left: 0,
            top: 0
          }}
        />
        <Button
          onPress={() => {
            this.setState({
              sortBy: 'rating'
            });
          }}
          title="Rating"
          color="#4286f4"
          style={{
            left: 0,
            top: 0
          }}
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
