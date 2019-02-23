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

const styles = StyleSheet.create({
  mainList: {

  },
  horizontalList: {

  }
});

let data = [
  {
    category: 'Pizza',
    foods: [
      {
        name: 'Hawaiian',
        price: 3.2,
        rating: 4.2
      },
      {
        name: 'Cheese',
        price: 9.2,
        rating: 4.1
      },
      {
        name: 'Pepperoni',
        price: 2.2,
        rating: 4.9
      }
    ]
  },
  {
    category: 'Burgers',
    foods: [
      {
        name: 'Big Mac',
        price: 1.2,
        rating: .1
      }
    ]
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Near U'
  };

  renderCategory({ item, index }) {

    function renderFood({ item }) {
      return (
        <View>
          <Text>{item.name}</Text>
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
          fontSize: 20,
          fontWeight: 'bold'
        }}>{item.category}</Text>
        <FlatList
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

/* 
<View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>

*/
