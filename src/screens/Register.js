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

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '',
    };
  }

  boxClick = (e) => {
    this.setState({
      bgColor: 'black',
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View></View>
        <View>
          <Image source={require('../images/logo1.png')} style={styles.logo} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              marginTop: 30,
              marginBottom: 50,
            }}>
            Register
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
              name="mail"
              color="grey"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            />
            <TextInput
              placeholder="Email Address"
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
              name="lock"
              color="grey"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
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
              name="lock"
              color="grey"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            />
            <TextInput
              placeholder="Repeate Password"
              secureTextEntry={true}
              style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 40,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={this.boxClick}
            style={{
              height: 18,
              width: 18,
              backgroundColor: '#FFF',
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight:10
            }}>
            <TouchableOpacity
              onPress={this.boxClick}
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: this.state.bgColor,
              }}></TouchableOpacity>
          </TouchableOpacity>
          <Text style={{fontSize:11, color:'#fff'}}>
            I agree to{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              terms of service{' '}
            </Text>
            and{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              privacy policy
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('Register2')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 40,
              marginTop: 15,
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
              Register
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigate('Login')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                backgroundColor: '#FFF',
                paddingVertical: 10,
                borderRadius: 13,
                flex: 0.45,
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 20,
              }}>
              <Text
                style={{
                  color: 'black',

                }}>
                Login
              </Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
              onPress={() => navigate('Forgot')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                backgroundColor: '#FFF',
                paddingVertical: 10,
                borderRadius: 13,
                flex: 0.45,
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
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
