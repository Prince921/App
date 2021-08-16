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
export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header
          style={{
            backgroundColor: '#fff',

            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 20,
          }}>
          <Left>
            <Image source={require('../images/homelogo.png')} />
          </Left>
          <Right>
            <TouchableOpacity onPress={() => navigate('Account')} style={{}}>
              <Icon name="picture" color="#FF6A6A" size={26} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <ScrollView showsVerticalScrollIndicator ={false}>
            <View style={{ paddingTop: 5 }}>
              <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={{
                    borderColor: '#FFF',

                    padding: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:Dimensions.get('window').width
                  }}>
                  <Image
                    style={{
                      height: 190,

                      margin: 10,
                      borderRadius: 20,
                      width: Dimensions.get('window').width-3
                    }}
                    source={require('../images/imageslider.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#FFF',

                    padding: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:Dimensions.get('window').width
                  }}>
                  <Image
                    style={{
                      height: 190,

                      margin: 10,
                      borderRadius: 20,
                      width: Dimensions.get('window').width-3
                    }}
                    source={require('../images/imageslider.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#FFF',

                    padding: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:Dimensions.get('window').width
                  }}>
                  <Image
                    style={{
                      height: 190,

                      margin: 10,
                      borderRadius: 20,
                      width: Dimensions.get('window').width-3
                    }}
                    source={require('../images/imageslider.png')}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
{/*
            <View style={{ marginBottom: 8 }}>
              <TouchableOpacity
                onPress={() => navigate('FindAgent')}
                style={{
                  marginHorizontal: 10,
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
                  elevation: 10,
                }}>
                <Ionicons
                  style={{ justifyContent:'center',alignItems:'center'}}
                  name="search"
                  size={20}
                  color="#CCD0F1"
                />
                <TextInput placeholder="Enter Pincode" />

                <Right></Right>
              </TouchableOpacity>
            </View>
            */}
            <View style={{ backgroundColor: '#fff' }}>
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                }}>
                <TouchableOpacity
                  onPress={() => navigate('FindAgent')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image
                    source={require('../images/placeholder2.png')}
                    style={{ height: 60 }}
                  />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>
                    Find Agent
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigate('PostLead')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image source={require('../images/edit1.png')} />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>
                    Post Requirements
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                }}>
                <TouchableOpacity
                  onPress={() => navigate('LoanCalculator')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image
                    source={require('../images/calculator.png')}
                    style={{ height: 60 }}
                  />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>
                    Loan Calculator
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigate('GetLoan')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image
                    source={require('../images/file.png')}
                    style={{ height: 60 }}
                  />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>Get Loan</Text>
                </TouchableOpacity>
              </View>
{/*
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                }}>
                <TouchableOpacity
                  onPress={() => navigate('AllLead')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image
                    source={require('../images/file.png')}
                    style={{ height: 60 }}
                  />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>All Leads</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigate('FAQ')}
                  style={{
                    flex: 0.5,
                    width: Dimensions.get('window').width / 2.3,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#fff',
                    padding: 15,
                    margin: 7,
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Image
                    source={require('../images/file.png')}
                    style={{ height: 60 }}
                  />
                  <Text style={{ fontSize: 12, marginTop: 15 }}>FAQ</Text>
                </TouchableOpacity>
              </View>
              */}
            </View>


            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', marginLeft: 15 }}>
                News and Updates
              </Text>
            </View>
            <View
              style={{
                margin: 5,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
              onPress={() => navigate('SingleBlog')}
                style={{
                  margin: 5,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                }}>
                <Image
                  source={require('../images/book.png')}
                  style={{
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{ flexWrap: 'wrap' }}>
                  <Text>This is Blog Title</Text>

                  <Text style={{ fontSize: 12, marginTop: 20 }}>{`
From it mediclave origins to the
digital era , Learn everything there
is to know about the ubiquitous
lorem ipsum passage.

      `}</Text>
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
              onPress={() => navigate('SingleBlog')}
                style={{
                  margin: 5,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                }}>
                <Image
                  source={require('../images/book.png')}
                  style={{ margin: 5 }}
                />
                <View style={{ flexWrap: 'wrap' }}>
                  <Text>This is Blog Title</Text>

                  <Text style={{ fontSize: 12, marginTop: 20 }}>{`
From it mediclave origins to the
digital era , Learn everything there
is to know about the ubiquitous
lorem ipsum passage.

      `}</Text>
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
              onPress={() => navigate('SingleBlog')}
                style={{
                  margin: 5,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                }}>
                <Image
                  source={require('../images/book.png')}
                  style={{ margin: 5 }}
                />
                <View style={{ flexWrap: 'wrap' }}>
                  <Text>This is Blog Title</Text>

                  <Text style={{ fontSize: 12, marginTop: 20 }}>{`
From it mediclave origins to the
digital era , Learn everything there
is to know about the ubiquitous
lorem ipsum passage.

      `}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: Dimensions.get('window').width }}>
              <TouchableOpacity
              onPress={() => navigate('AllBlog')}
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

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 15,
                }}>
                <Text style={{ paddingVertical: 5 }}>View All</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
