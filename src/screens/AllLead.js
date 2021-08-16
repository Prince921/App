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

export default class AllLead extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={{backgroundColor:'#fff'}}>
        <Header
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            shadowColor: '#000',

            justifyContent:'center',
            alignItems:'center',
            shadowOpacity: 0.4,

            shadowRadius: 10,
            shadowOffset: {
              height: 0.5,
              width: 0.5,
            },
          }}>
          <TouchableOpacity onPress={() => navigate('Home')} style={{ position: 'absolute', left: 5, }}>
            <Icon
              name="arrowleft"
              color="#C4C4C4"
              size={26}

            />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>All Leads</Text>
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
                elevation: 10,}}
          >
            <TouchableOpacity
            onPress={() => navigate('SingleLead')}
              style={{
                marginHorizontal: 10,
                borderRadius: 18,
                borderWidth: 2,
                marginTop:10,

                borderColor: '#fff',
                shadowColor: '#C4C4C4',


                padding: 5,


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
                <Text style={{ fontWeight: 'bold' }}>Pincode: </Text>
                <Text>110096</Text>
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

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,}}
          >
            <TouchableOpacity
            onPress={() => navigate('SingleLead')}
              style={{
                marginHorizontal: 10,
                borderRadius: 18,
                borderWidth: 2,
                marginTop:10,

                borderColor: '#fff',
                shadowColor: '#C4C4C4',


                padding: 5,


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
                <Text style={{ fontWeight: 'bold' }}>Pincode: </Text>
                <Text>110096</Text>
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

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,}}
          >
            <TouchableOpacity
            onPress={() => navigate('SingleLead')}
              style={{
                marginHorizontal: 10,
                borderRadius: 18,
                borderWidth: 2,
                marginTop:10,

                borderColor: '#fff',
                shadowColor: '#C4C4C4',


                padding: 5,


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
                <Text style={{ fontWeight: 'bold' }}>Pincode: </Text>
                <Text>110096</Text>
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

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,}}
          >
            <TouchableOpacity
            onPress={() => navigate('SingleLead')}
              style={{
                marginHorizontal: 10,
                borderRadius: 18,
                borderWidth: 2,
                marginTop:10,

                borderColor: '#fff',
                shadowColor: '#C4C4C4',


                padding: 5,


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
                <Text style={{ fontWeight: 'bold' }}>Pincode: </Text>
                <Text>110096</Text>
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

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,
                marginBottom: 30,
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,}}
          >
            <TouchableOpacity
            onPress={() => navigate('SingleLead')}
              style={{
                marginHorizontal: 10,
                borderRadius: 18,
                borderWidth: 2,
                marginTop:10,

                borderColor: '#fff',
                shadowColor: '#C4C4C4',


                padding: 5,



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
                <Text style={{ fontWeight: 'bold' }}>Pincode: </Text>
                <Text>110096</Text>
              </View>

            </TouchableOpacity>
            </View>


      </ScrollView>
      </Content>
      </Container>
    );
  }
}
