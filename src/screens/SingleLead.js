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
export default class SingleLead extends React.Component {
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
            onPress={() => navigate('AllLead')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Single Lead</Text>
        </Header>
        <Content>
          <ScrollView>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                marginHorizontal: 10,

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,
              }}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 10,
                  borderRadius: 18,
                  borderWidth: 2,
                  marginTop: 10,

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
                  Insurance Type - Company Name
                </Text>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                  <Text>01/02/2021</Text>
                </View>

                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Primium: </Text>
                  <Text>10,000/- Per Month</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>Plan Period: </Text>
                  <Text>30 Years/-</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', margin: 2, marginBottom: 7 }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Requirement: The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have
                    scrambled parts of Cicero's De Finibus Bonorum et Malorum
                    for use in a type specimen book.{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 6,
                  backgroundColor: '#FFF',

                  borderRadius: 13,
                  flex: 0.45,
                  borderColor: '#FF6A6A',
                  borderWidth: 2,
                  width: Dimensions.get('window').width / 1.1,
                  marginHorizontal: 10,

                  flexDirection: 'row',

                  shadowColor: 'black',
                  shadowOpacity: 0.5,
                  elevation: 10,
                }}>
                <Text
                  style={{
                    color: '#C4C4C4',
                  }}>
                  Get Now
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#000',margin:20 }}></View>
            <View>
                          <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="user"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Complete  Name"
                placeholderTextColor="#C4C4C4"
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

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
                <Icon
                  name="bank"
                  color="#C4C4C4"
                  size={20}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}
                />
                <TextInput
                  placeholder="Multi Premium"
                  placeholderTextColor="#C4C4C4"
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

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
                }}>
                <Ionicons
                  name="calendar"
                  size={20}
                  color="#C4C4C4"
                  style={{ paddingLeft: 10 }}
                />
                <TextInput
                  placeholder="Plan Duration"
                  placeholderTextColor="#C4C4C4"
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

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
                }}>
                <TextInput
                  placeholder="Expected Return at the end of policy"
                  placeholderTextColor="#C4C4C4"
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

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
                }}>
                <TextInput
                  placeholder="Upload Proposal Document"
                  placeholderTextColor="#C4C4C4"
                  style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
                />
              </View>
              <TouchableOpacity
                style={{
                  margin: 15,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 10,

                marginTop: 35,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity:1,
                elevation: 10,
                marginBottom:20
                }}>
                <Text style={{ color: '#C4C4C4' }}>Make Offer</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
