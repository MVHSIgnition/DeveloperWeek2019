import React from 'react';
import { StyleSheet, Linking,
View,
Text,
} from 'react-native';

import Picker from 'react-native-picker-select';

export default class RouteScreen extends React.Component {
    static navigationOptions = {
        title: 'Route'
    };
    
    state = {
        value: 0,
        floor: 1,
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        this.setState({ submitted: true });
        event.preventDefault();
    };

    render() {
        return (
            <View>
                <Picker
                    items={[
                        {
                        label: 'Floor 1',
                        value: 1
                        },
                        {
                        label: 'Floor 2',
                        value: 2
                        },
                        {
                        label: 'Floor 3',
                        value: 3
                        }
                    ]}
                    onValueChange={floor => this.setState({ floor })}
                    placeholder={{}}
                    />
                { this.state.floor == 1 &&
                    <Text style={{ 
                        fontSize: 24
                    }}>
                        1. Travel north until you hit stairs{'\n'}
                        2. Go up just one floor{'\n'}
                        3. Travel south until you see Chipotle
                    </Text>
                }
                { this.state.floor == 2 &&
                    <Text style={{ 
                        fontSize: 24
                    }}>
                        1. Travel northwest until you find chipotle
                    </Text>
                }
                { this.state.floor == 3 &&
                    <Text style={{ 
                        fontSize: 24
                    }}>
                        1. Travel southeast until you find stairs {'\n'}
                        2. Travel down one floor{'\n'}
                        3. Walk north until you find chipotle
                    </Text>
                }
            </View>
        );
    }
}

/*
<form onSubmit={this.handleSubmit}>
                    <label>
                       Floor:
                        <TextInput value={this.state.value} onChange={this.handleChange} type="number" name="floor" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                */