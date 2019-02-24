import React from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { WebBrowser, Location, Permissions } from 'expo';
import database from '../database';
import { TextInput } from 'react-native';

let data = database.categories;

const styles = StyleSheet.create({
  mainList: {
  },
  horizontalList: {
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({errorMessage: 'Location permission denied!'});
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  renderCategory = ({ item, index }) => {

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
          >{database.formatter.price(item.price)}</Text>
        </View>
      );
    }

    return (
        <View
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
          <TouchableOpacity
            onPress={() => {
              console.log('clicked');
              this.props.navigation.navigate('Category', {
                category: item.category
              });
            }}
          >
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold'
            }}>{item.category}</Text>
          </TouchableOpacity>
          <FlatList
            style={{
              marginTop: 4
            }}
            horizontal={true}
            contentContainerStyle={styles.horizontalList}
            data={item.foods}
            renderItem={renderFood}
          />
        </View>
    );
  }

  render() {

    let dataToShow = data;

    /* if (this.state.search) {

    } */
    console.log('Location: ', this.state.location);

    if (this.state.location !== null) {
      let lat = this.state.location.coords.latitude;
      let lng = this.state.location.coords.longitude;
      fetch(`https://gfe.cit.api.here.com/2/search/proximity.json?app_id=HoeQKWhoVTbuQ8HkxAjL&app_code=37-EHs_xz3YwLyN7t52JxQ&layer_ids=4711&key_attribute=NAME&proximity=${lat},${lng}`)
        .then(response => response.json())
        .then(data => {
          console.log('data: ', data)
          if (data.geometries.length != 0) {
            console.log('YOU ARE IN THE FENCEEEEE!');
          }
        })
        .catch(err => console.log(err));
    }

    return (
      <View>
        <TextInput
          style={{
            height: 50,
            backgroundColor: '#ddd',
            paddingLeft: 14,
            fontSize: 16
          }}
          onChange={search => this.setState({ search })}
          placeholder={"Search"}
        />
        <View>
          <FlatList
            contentContainerStyle={styles.mainList}
            data={dataToShow}
            renderItem={this.renderCategory}
          />
        </View>
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