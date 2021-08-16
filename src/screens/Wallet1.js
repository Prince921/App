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
  Right
} from 'native-base';

export default class FindAgent extends React.Component {
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
            onPress={() => navigate('Wallet')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Request Widthrawal</Text>
        </Header>
        <Content>
          <ScrollView>
            <View>
              <TouchableOpacity
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                  paddingVertical: 2,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                  padding:5,

                }}>
                <Image
                  source={require('../images/books.png')}
                  style={{ margin: 5, height: 50, width: 50, marginRight: 20 }}
                />
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 40 }}>Current balance</Text>

                    <Text>Rs. 500</Text>
                  </View>

                </View>
              </TouchableOpacity>

              <View>
              <Text style={{fontWeight:'bold',marginLeft:5,marginBottom:10}}>Note: Minimum withdraw amount is Rs. 100/-</Text>
              </View>
              <View>
              <Text style={{marginLeft:5,marginBottom:20}}>Please enter your paytm number to withdraw</Text>
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
              marginHorizontal: 10,
              alignItems: 'center',
              shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
            }}>
            <Icon
              name="phone"
              color="#C4C4C4"
              size={20}
              style={{ justifyContent: 'center', alignItems: 'center',marginLeft:5 }}
            />
            <TextInput
              placeholder="+91 8888 999 000"
              placeholderTextColor='#C4C4C4'

              style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
            />
          </View>

          <TouchableOpacity
              style={{
                borderWidth: 2,
                marginTop: 35,
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
                marginBottom:100
              }}>
              <Text style={{ color: '#C4C4C4',paddingVertical:6 }}>Submit Request</Text>
            </TouchableOpacity>
            </View>


          </ScrollView>
        </Content>
     </Container>
    );
  }
}
