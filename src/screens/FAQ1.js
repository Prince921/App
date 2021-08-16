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
import { Container, Button, Header, Footer, Content,Left,Right } from 'native-base';

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
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 20,
                  marginBottom: 30
              }}>
              <TouchableOpacity
                onPress={() => navigate('FAQ')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,

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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Left>
                    <Text style={{fontWeight: 'bold' }}>
                      What is MyInsure
                    </Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => navigate('FAQ')}>
                      <Icon name="arrowdown" color="#C4C4C4" size={24} />
                    </TouchableOpacity>
                  </Right>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      marginTop: 40,
                      fontSize: 14,
                    }}>{`Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
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
