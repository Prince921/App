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

export default class BuyCredit extends React.Component {
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
          <Text style={{fontSize: 18}}>Buy Credit</Text>
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
                marginBottom: 15,

                backgroundColor: '#fff',

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:20
              }}>
              <TouchableOpacity
                style={{
                  margin: 15,
                  borderRadius: 15,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 3,
                    marginBottom: 8,
                  }}>
                  <Text style={{ fontWeight: 'bold' }}>Plan Name: </Text>
                  <Text>Starter</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Amount: </Text>
                  <Text>500/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Tax: </Text>
                  <Text>Rs 18/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                  <Text>518/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Credit: </Text>
                  <Text>400/-</Text>
                </View>

                <Text style={{ color: '#FF6A6A', marginBottom: 5 }}>
                  Buy Now{' '}
                </Text>
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
                alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:10
              }}>
              <TouchableOpacity
                style={{
                  margin: 15,
                  borderRadius: 15,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 3,
                    marginBottom: 8,
                  }}>
                  <Text style={{ fontWeight: 'bold' }}>Plan Name: </Text>
                  <Text>Friendly</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Amount: </Text>
                  <Text>1000/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Tax: </Text>
                  <Text>Rs 18/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                  <Text>1018/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Credit: </Text>
                  <Text>900/-</Text>
                </View>

                <Text style={{ color: '#FF6A6A', marginBottom: 5 }}>
                  Buy Now{' '}
                </Text>
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
                alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:10
              }}>
              <TouchableOpacity
                style={{
                  margin: 15,
                  borderRadius: 15,
                  borderWidth: 2,

                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 3,
                    marginBottom: 8,
                  }}>
                  <Text style={{ fontWeight: 'bold' }}>Plan Name: </Text>
                  <Text>Starter</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Amount: </Text>
                  <Text>500/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Tax: </Text>
                  <Text>Rs 18/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                  <Text>518/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Text style={{ fontWeight: 'bold' }}>Credit: </Text>
                  <Text>400/-</Text>
                </View>

                <Text style={{ color: '#FF6A6A', marginBottom: 5 }}>
                  Buy Now{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
