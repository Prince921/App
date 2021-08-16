import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Otp extends React.Component {
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
            We sent OTP on your registered Email.
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
              marginTop: 120
            }}>
            <TextInput
              placeholder="OTP"
              style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
            />
          </View>

        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('ResetPassword')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 40,
              marginTop: 50,
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
});
