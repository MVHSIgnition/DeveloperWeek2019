import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import database from '../database';

let data = database.categories;

const styles = StyleSheet.create({
  mainList: {

  },
  horizontalList: {

  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Near U'
  };

  renderCategory({ item, index }) {

    function renderFood({ item }) {

      return (
        <View>
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
          ></Image>
          <Text
            style={{
              fontSize: 16
            }}
          >{item.name}</Text>
          <Text
            style={{
              fontSize: 14
            }}
          >${item.price}</Text>
        </View>
      );
    }

    return (
      <View
        elevation={5}
        style={{
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
        }}
      >
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>{item.category}</Text>
        <FlatList
          style={{
            marginTop: 4
          }}
          horizontal={true}
          contentContainerStyle={styles.horizontalList}
          data={item.foods}
          renderItem={renderFood}
        ></FlatList>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.mainList}
          data={data}
          renderItem={this.renderCategory}
        >
        </FlatList>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}