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
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Button,
  Header,
  Footer,
  Content,
  Left,
  Right,
} from 'native-base';

export default class AgentProfile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            shadowColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.4,
            shadowRadius: 10,
            shadowOffset: {
              height: 0.5,
              width: 0.5,
            },
          }}>
          <TouchableOpacity
            onPress={() => navigate('FindAgent')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Agent Profile</Text>
        </Header>
        <Content>
          <ScrollView>
            <View style={{ marginBottom: 50 }}>
              <View
                style={{
                  margin: 10,

                  height: 200,
                  position: 'relative',
                  top: 0,
                  left: 0,
                  backgroundColor: '#C4C4C4',
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: '#FF6A6A',
                }}></View>
              <View
                style={{
                  height: 100,
                  margin: 10,
                  width: 100,
                  borderRadius: 50,
                  position: 'absolute',
                  top: 150,
                  left: 20,
                  elevation: 10,
                  backgroundColor: '#FFF',
                  borderWidth: 2,
                  borderColor: '#FF6A6A',
                  marginBottom: 30,
                }}>
                <TouchableOpacity style={{ marginBottom: 50 }}>
                  <Image
                    style={{
                      width: 95,
                      height: 95,
                    }}
                    source={require('../images/profileimage.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#fff' }}>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    backgroundColor: '#fff',
                    fontSize: 23,
                    borderBottomWidth: 2,
                    borderBottomColor: '#FF6A6A',
                    flex: 1,
                  }}>
                  Nargesh Rana
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Text style={{ fontWeight: 'bold' }}>
                Agency Licence Verified :
              </Text>
              <Image
                style={{
                  position: 'absolute',
                  right: 10,
                  height: 22,
                  width: 22,
                }}
                source={require('../images/tick.png')}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                marginLeft: 10,
              }}>
              <Left>
                <Text style={{ fontWeight: 'bold' }}>
                  Rating and Reviews :
                </Text>
              </Left>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 10,
                }}>
                <Image style={{}} source={require('../images/Star.png')} />
                <Image style={{}} source={require('../images/Star.png')} />
                <Image style={{}} source={require('../images/Star.png')} />
                <Image style={{}} source={require('../images/Star.png')} />
                <Image style={{}} source={require('../images/Star.png')} />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginBottom: 20,
              }}>
              <Text style={{ fontWeight: 'bold' }}>Contact Me : </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#60CD64',
                  padding: 5,
                  paddingHorizontal: 40,
                  marginLeft: 40,
                  borderRadius: 25,
                  position:'absolute',
                  right:10
                }}>
                <Text>Call Me</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 5,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,

                  marginTop: 15,
                  borderRadius: 13,
                  borderColor: '#FFF',
                  backgroundColor: '#fff',

                  marginHorizontal: 10,

                  shadowColor: '#000000',
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{ fontWeight: 'bold', marginBottom: 8, margin: 2 }}>
                  Company Assosiated with:
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      margin: 7,
                    }}
                    source={require('../images/Insurance1.png')}
                  />
                  <Text>LIC - Life Insurance Corporation</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      margin: 7,
                    }}
                    source={require('../images/Insurance2.png')}
                  />
                  <Text>National Insurance of India</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                margin: 5,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,

                  marginTop: 15,
                  borderRadius: 13,
                  borderColor: '#FFF',
                  backgroundColor: '#fff',

                  marginHorizontal: 10,

                  shadowColor: '#000000',
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{ fontWeight: 'bold', margin: 2, marginBottom: 6 }}>
                  Latest Offers:
                </Text>
                <Text>{`You can right about latest offers or new
opportunities you can help or provide to the
customer.
      `}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                margin: 5,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  marginBottom: 10,
                  marginTop: 15,
                  borderRadius: 13,
                  borderColor: '#FFF',
                  backgroundColor: '#fff',

                  marginHorizontal: 10,

                  shadowColor: '#000000',
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{ fontWeight: 'bold', margin: 2, marginBottom: 6 }}>
                  About Me:
                </Text>
                <Text>{`In litracy theroy a text is any object that can be
"read", whether this object is a work of literature,
a street sign, an arrangement of buildings on a
city block, or style of clothing
      `}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
