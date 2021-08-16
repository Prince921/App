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
          <Text style={{fontSize: 18}}>Become Affiliate</Text>
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
                }}>
                <Image
                  source={require('../images/books.png')}
                  style={{ margin: 5, height: 80, width: 80,marginRight:10 }}
                />

                <View style={{ flexWrap: 'wrap', marginBottom: 11 }}>
                  <Text style={{}}>Become Affiliate</Text>


                  <Text style={{fontSize:14,marginTop:22}}>Join and Earn from the platform</Text>
                </View>
              </TouchableOpacity>
              <View style={{ margin: 20 }}>
                <Text style={{ marginBottom: 30 }}>Benifits:</Text>
                <Text style={{ marginBottom: 30 }}>
                  There's no limit to the number of businesses you can refer. If
                  each business stays with us for 90 days, you'll get the Amazon
                  Gift Card for every referral.
                </Text>
                <Text style={{ marginBottom: 30 }}>
                  There's no limit to the number of businesses you can refer. If
                  each business stays with us for 90 days, you'll get the Amazon
                  Gift Card for every referral.
                </Text>
                <Text style={{ marginBottom: 30 }}>
                  There's no limit to the number of businesses you can refer. If
                  each business stays with us for 90 days, you'll get the Amazon
                  Gift Card for every referral.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/Paytm.png')}
                    style={{ margin: 5 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../images/Upi.png')}
                    style={{ margin: 5 }}
                  />
                </TouchableOpacity>
              </View>
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
              borderWidth: 1.5,
              width: Dimensions.get('window').width,
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
              Join Now
            </Text>
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
