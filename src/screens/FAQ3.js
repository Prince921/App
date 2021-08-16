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
import { Container, Button, Header, Footer, Content,Left, Right} from 'native-base';

export default class FAQ extends React.Component {
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
            onPress={() => navigate('FAQ')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
        </Header>
        <Content>
          <ScrollView>

            <View style={{
                margin: 8,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 3,



                backgroundColor: '#fff',


                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                  marginBottom: 30
              }}>
              <TouchableOpacity
              onPress={() => navigate('FAQ')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',

                  padding: 2,

                  shadowRadius: 10,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5,
                  },
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Left>
                    <Text style={{fontWeight: 'bold'}}>Why I need subscription</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => navigate('FAQ')}>
                      <Icon
                        name="arrowdown"
                        color="#C4C4C4"
                        size={24}
                        style={{}}
                      />
                    </TouchableOpacity>
                  </Right>
                </View>
              </TouchableOpacity>
            </View>


          </ScrollView>
        </Content>
      </Container>
    );
  }
}
