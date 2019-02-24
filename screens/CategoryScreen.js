import React from 'react';
import { StyleSheet } from 'react-native';

import database from '../database';

import { 
  View,
  FlatList,
  Text,
  Image,
} from 'react-native';



export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.state.params.category
    }
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
    this.data = database.categories[dataIndex].foods;

    return (
      <View>
        <FlatList
          contentContainerStyle={styles.mainList}
          data={this.data}
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
