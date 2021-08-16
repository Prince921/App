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
  Linking
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

export default class Account extends React.Component {
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
            onPress={() => navigate('Home')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Account</Text>
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
                <Text style={{ fontWeight: 'bold' }}>Rating and Reviews :</Text>
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
              }}>
              <Text style={{ fontWeight: 'bold' }}>Contact Me : </Text>
              <Text
                style={{ fontWeight: 'bold', position: 'absolute', right: 10 }}>
                +91 9988776655
              </Text>
            </View>
            <View>
              <View
                style={{
                  margin: 15,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('Profile')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',

                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="user"
                      color="#FF6A6A"
                      size={24}
                      style={{ marginRight: 10 }}
                    />
                    <Text>Public Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,
                  marginBottom: 10,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('EditProfile')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="edit"
                      color="#FF6A6A"
                      size={24}
                      style={{ marginRight: 10 }}
                    />
                    <Text>Edit Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>
{/*
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,
                  marginBottom: 15,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('Leads')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    alignItems: 'center',

                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="edit"
                      color="#FF6A6A"
                      size={24}
                      style={{ marginRight: 10 }}
                    />
                    <Text>My Leads</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,
                  marginBottom: 15,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('Wallet')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    alignItems: 'center',

                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="creditcard"
                      color="#FF6A6A"
                      size={24}
                      style={{ marginRight: 10 }}
                    />
                    <Text>My Credits</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,
                  marginBottom: 15,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('PostLead')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    alignItems: 'center',

                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="edit"
                      color="#FF6A6A"
                      size={24}
                      style={{ marginRight: 10 }}
                    />
                    <Text>Post Leads</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,
                  marginBottom: 15,

                  backgroundColor: '#fff',

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigate('Affiliate')}
                  style={{
                    margin: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                    flexDirection: 'row',
                    borderColor: '#fff',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    alignItems: 'center',

                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="share" size={24} color="#FF6A6A" />
                    <Text>Refer And Earn</Text>
                  </View>
                </TouchableOpacity>
              </View>
            */}
            <View
              style={{
                margin: 10,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,



                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigate('FAQ')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  alignItems: 'center',
                  flex: 1,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name="question"
                    color="#FF6A6A"
                    size={24}
                    style={{ marginRight: 10 }}
                  />
                  <Text>FAQ</Text>
                </View>
              </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity
              onPress={ ()=> Linking.openURL('https://myinsure.in') }
              style={{
                margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 5
              }}>
              <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Join as Insurance Agent</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigate('Policy')}
              style={{
                margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 5
              }}>
              <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigate('Terms')}
              style={{
                margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 5
              }}>
              <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Terms of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigate('About')}
              style={{
                margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 5,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 20
              }}>
              <Text style={{ paddingTop: 5, paddingBottom: 5 }}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Login')}
              style={{
                margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 30
              }}>
              <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Logout</Text>
            </TouchableOpacity>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
