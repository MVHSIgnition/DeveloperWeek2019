import React from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  TextInput,
  AppState
} from 'react-native';
import { WebBrowser, Location, Permissions } from 'expo';
import database from '../database';

import cio from 'cheerio-without-node-native';

let data = database.categories;

const styles = StyleSheet.create({
  mainList: {
  },
  horizontalList: {
  }
});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    location: null,
    errorMessage: null,
    showCategories: true,
    appState: AppState.currentState
  };

  /*constructor() {
    super();
    fetch('https://www.zomato.com/santa-clara-ca/mezbaan-bar-indian-cuisine-santa-clara/menu', {
      method: 'GET',
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Authorization": "Basic " + 'user:pass'
      },
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    //this.$ = cio.load('');
  }*/

  /*componentDidMount() {
    AppState.addEventListener('change', state => {
      console.log('state: ', state);
    });
    this._getLocationAsync();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      this._getLocationAsync();
    }
    this.setState({appState: nextAppState});
  };*/

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({errorMessage: 'Location permission denied!'});
      console.error('problem bith');
    }

    // let location = await Location.getCurrentPositionAsync({});

    let location = {
      "coords": {
        "accuracy": 5,
        "altitude": 0,
        "altitudeAccuracy": -1,
        "heading": -1,
        "latitude": 37.32529784053908,
        "longitude": -121.94548105047858,
        "speed": -1,
      },
      "timestamp": 1551034198566.186,
    }

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
              fontSize: 16,
              width: 100
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
            keyExtractor={item => item.name}
          />
        </View>
    );
  }

  render() {

    let dataToShow = data;

    if (this.state) {
      if (this.state.search) {
        dataToShow = dataToShow.filter(e => e.category.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()));
      }
    }

    //this._getLocationAsync();
    /* if (this.state.location !== null) {
      let lat = this.state.location.coords.latitude;
      let lng = this.state.location.coords.longitude;
      fetch(`https://gfe.cit.api.here.com/2/search/proximity.json?app_id=HoeQKWhoVTbuQ8HkxAjL&app_code=37-EHs_xz3YwLyN7t52JxQ&layer_ids=4711&key_attribute=NAME&proximity=${lat},${lng}`)
        .then(res => res.json())
        .then(data => {
          // console.log('data: ', data)
          if (data.geometries.length !== 0) {
            //console.log('YOU ARE IN THE FENCEEEEE!');
            this.setState({showCategories:true});
          } else {
            this.setState({showCategories:false});
          }
        })
        .catch(err => console.log(err));
    } */

    if (this.state.showCategories) {
      //console.log(this.state.showCategories);
      return (
        <View>
          <AnimatedTextInput
            style={{
              height: 50,
              backgroundColor: '#ddd',
              paddingLeft: 14,
              fontSize: 16
            }}
            onChangeText={search => this.setState({ search })}
            placeholder="Search"
          />
          <View>
            {dataToShow.length !== 0 && <FlatList
              contentContainerStyle={styles.mainList}
              data={dataToShow}
              renderItem={this.renderCategory}
              keyExtractor={item => item.category}
              extraData={this.state}
            />}
            {dataToShow.length === 0 && <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginTop: '50%'
              }}
            >No results for {this.state.search}</Text>}
          </View>
        </View>
      );
    } else {
      //console.log(this.state.showCategories);
      return (
        <View>
          <Text style={{fontSize: 18, textAlign: 'center', marginTop: '50%'}}>No restaurants nearby!</Text>
        </View>
      );
    }
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
