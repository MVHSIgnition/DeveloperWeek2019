import React from 'react';
import { StyleSheet } from 'react-native';

import database from '../database';

import { 
  View,
  FlatList,
  Text,
  Image,
} from 'react-native';

let category = 'Pizza';
let dataIndex = database.categories.findIndex(item => item.category == category);
let data = database.categories[dataIndex].foods;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: category,
  };

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
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Price: {database.formatter.price(item.price)}</Text>
          <Text>Rating: {item.rating}</Text>
        </View>
      </View>
    );
  }

  render() {
    console.log('Data: ', data);
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.mainList}
          data={data}
          renderItem={this.renderItem}
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
