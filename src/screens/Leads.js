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
import { Container, Button, Header, Footer, Content } from 'native-base';
export default class Leads extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
       <Container style={{backgroundColor:'#fff'}}>
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
            onPress={() => navigate('Account')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>My Leads</Text>
        </Header>
        <Content>
          <ScrollView>
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
                style={{
                  margin: 10,
                  borderRadius: 18,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',

                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text>Select date to filter</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,
                marginBottom: 5,

                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  margin: 10,
                  borderRadius: 18,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,

                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{
                    margin: 2,
                    marginBottom: 10,
                    marginTop: 5,
                    fontWeight: 'bold',
                  }}>
                  Company Name
                </Text>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                  <Text>01/02/2021</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Contact: </Text>
                  <Text>+91 9999 777 666</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Location: </Text>
                  <Text>110023</Text>
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
                marginBottom: 5,

                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  margin: 10,
                  borderRadius: 18,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,

                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{
                    margin: 2,
                    marginBottom: 10,
                    marginTop: 5,
                    fontWeight: 'bold',
                  }}>
                  Company Name
                </Text>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                  <Text>01/02/2021</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Contact: </Text>
                  <Text>+91 9999 777 666</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Location: </Text>
                  <Text>110023</Text>
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
                marginBottom: 5,

                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  margin: 10,
                  borderRadius: 18,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,

                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{
                    margin: 2,
                    marginBottom: 10,
                    marginTop: 5,
                    fontWeight: 'bold',
                  }}>
                  Company Name
                </Text>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                  <Text>01/02/2021</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Contact: </Text>
                  <Text>+91 9999 777 666</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Location: </Text>
                  <Text>110023</Text>
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
                marginBottom: 25,

                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  margin: 10,
                  borderRadius: 18,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,

                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <Text
                  style={{
                    margin: 2,
                    marginBottom: 10,
                    marginTop: 5,
                    fontWeight: 'bold',
                  }}>
                  Company Name
                </Text>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                  <Text>01/02/2021</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Contact: </Text>
                  <Text>+91 9999 777 666</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Location: </Text>
                  <Text>110023</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
     </Container>
    );
  }
}
