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
          <Text style={{fontSize: 18}}>Wallet</Text>
        </Header>
        <Content>
          <ScrollView>
            <View>
              <TouchableOpacity
            onPress={() => navigate('Wallet1')}

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
                  <View>
                    <Text>Request Widthrawal ->></Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',


                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                  padding:5,
                  paddingVertical:10
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Lead purchaged</Text>
                    <Text> Rs.- 100/-</Text>
                  </View>
                  <View>
                    <Text>Arun Thakur | Home Loan | 50L</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',


                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                  padding:5,
                  paddingVertical:10
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Credit Added</Text>
                    <Text> Rs.- 500/-</Text>
                  </View>
                  <View>
                    <Text>Basic Plan</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                  padding:5,
                  paddingVertical:10,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Credit Added</Text>
                    <Text> Rs.- 500/-</Text>
                  </View>
                  <View>
                    <Text>Basic Plan</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                   padding:5,
                  paddingVertical:10,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Affiliate Income</Text>
                    <Text> Rs.- 100/-</Text>
                  </View>
                  <View>
                    <Text>Bishal Thapa | Personal Loan | 2.3L</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                 padding:5,
                  paddingVertical:10,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 5 }}>Affiliate Income</Text>
                    <Text> Rs.- 100/-</Text>
                  </View>
                  <View>
                    <Text>Bishal Thapa | Personal Loan | 2.3L</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                   padding:5,
                  paddingVertical:10,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Affiliate Income</Text>
                    <Text> Rs.- 100/-</Text>
                  </View>
                  <View>
                    <Text>Bishal Thapa | Personal Loan | 2.3L</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigate('BuyCredit')}
                style={{
                  margin: 8,
                  borderRadius: 20,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  marginHorizontal: 10,

                  marginTop: 15,

                  backgroundColor: '#fff',
                  padding:5,
                  paddingVertical:10,

                  shadowColor: '#C4C4C4',
                  shadowOpacity: 1,
                  elevation: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ marginRight: 20 }}>15/March/2021</Text>

                    <Text style={{ marginRight: 15 }}>Affiliate Income</Text>
                    <Text> Rs.- 100/-</Text>
                  </View>
                  <View>
                    <Text>Bishal Thapa | Personal Loan | 2.3L</Text>
                  </View>
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
