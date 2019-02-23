import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  View,
  FlatList,
  Text,
} from 'react-native';

let data = [
  {
    key: '0',
    name: 'Hawaiian',
    price: 3.2,
    rating: 4.2
  },
  {
    key: '1',
    name: 'Pepperoni',
    price: 6.9,
    rating: 3.4
  }
];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'INSERT CATEGORY HERE',
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
        <View style={{ width: 100, height: 100, borderRadius: 8, backgroundColor: '#CCC' }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>Rating: {item.rating}</Text>
        </View>
      </View>
    );
  }

  render() {
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
