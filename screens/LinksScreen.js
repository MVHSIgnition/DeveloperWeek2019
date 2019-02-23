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
      <View>
        <View style={{ marginLeft: '25%' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Price: {item.price}</Text>
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
  mainList: {
    padding: 10
  }
});
