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

export default class FindAgent extends React.Component {
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
          <Text style={{fontSize: 18}}>All Blogs</Text>
        </Header>
        <Content>
          <ScrollView>
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

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                  marginBottom: 20
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
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 10,
  },
});
