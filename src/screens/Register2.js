import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Picker,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

export default class Register2 extends React.Component {
  state = { user: '' };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginTop: 80,
              marginBottom: 50,
            }}>
            Please complete your Profile
          </Text>
        </View>

        <View>
          <View
            style={{
              marginHorizontal: 40,
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 13,
              borderColor: '#FFF',
              backgroundColor: '#fff',
              paddingVertical: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 20,
            }}>
            <Icon
              name="creditcard"
              color="grey"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            />
            <TextInput
              placeholder="Complete Name"
              style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
            />
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 13,
              borderColor: '#FFF',
              backgroundColor: '#fff',
              paddingVertical: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 40,
              alignItems: 'center',
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 20,
            }}>
            <Icon
              name="phone"
              color="grey"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            />
            <TextInput
              placeholder="Mobile No"
              keyboardType={'numeric'}
              style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
            />
          </View>
          <View
            style={{
              
              marginTop: 15,
              borderRadius: 13,
             
              backgroundColor: '#fff',

              flexDirection: 'row',

              marginHorizontal: 40,
              alignItems: 'center',
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 20,
            }}>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
              style={{
                borderRadius: 13,
                flex: 1,
              }}>
              <Picker.Item label="Location" value="location" />
              <Picker.Item label="Delhi" value="delhi" />
              <Picker.Item label="Mumbai" value="mumbai" />
              <Picker.Item label="Karnataka" value="Karnataka" />
              <Picker.Item label="Jaipur" value="jaipur" />
              <Picker.Item label="Kolkata" value="Kolkata" />
              <Picker.Item label="Chennai" value="Chennai" />
            </Picker>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('Register3')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 40,
              marginTop: 30,
              backgroundColor: '#FFF',
              paddingVertical: 10,
              borderRadius: 13,
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 20,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6A6A',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
});
