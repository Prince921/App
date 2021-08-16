import React, { useEffect, useState } from 'react';
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
  FlatList,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import { Container, Button, Header, Footer, Content,Left, Right, } from 'native-base';


const FindAgent = ({navigation,navigate}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


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
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ position: 'absolute', left: 5, }}>
            <Icon
              name="arrowleft"
              color="#C4C4C4"
              size={26}

            />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Find Agent</Text>
        </Header>
        <Content>
        <ScrollView>
                  <View>
                  <View style={{ marginBottom: 8 }}>
              <View
                style={{
                  marginHorizontal: 10,
                  borderWidth: 2,
                  marginTop: 15,
                  borderRadius: 13,
                  borderColor: '#FFF',
                  backgroundColor: '#fff',
                  paddingVertical: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,

                }}>
                <Ionicons
                  style={{ justifyContent:'center',alignItems:'center'}}
                  name="search"
                  size={20}
                  color="#CCD0F1"
                />
                <TextInput placeholder="Enter Pincode" style={{ flex: 1 }} />
              </View>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('AgentProfile', {id: data.id})}
              style={{
                 margin:8,
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
                source={require('../images/book.png')}
                style={{ margin: 5, }}
              />


              <View style={{ flexWrap: 'wrap',justifyContent:'center'}}>
                <Text>Company Name{/*{data.title}*/}</Text>


                <View style={{ backgroundColor: '#fff',flexDirection:'row',alignItems:'center'}}>
          <Text style={{ fontSize:15}}>Verified:  </Text>
          <Image

                  source={require('../images/tick.png')}
                  style={{height:22,width:22}}
                />
        </View>
        <Text style={{marginTop:1}}>Company one {/*{data.id}*/}</Text>
        <Text style={{}}>Company Two</Text>
        <Text style={{}}>Location 110023</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('AgentProfile', {id: data.id})}
              style={{
                 margin:8,
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
                source={require('../images/book.png')}
                style={{ margin: 5, }}
              />


              <View style={{ flexWrap: 'wrap',justifyContent:'center'}}>
                <Text>Company Name{/*{data.title}*/}</Text>


                <View style={{ backgroundColor: '#fff',flexDirection:'row',alignItems:'center'}}>
          <Text style={{ fontSize:15}}>Verified:  </Text>
          <Image

                  source={require('../images/tick.png')}
                  style={{height:22,width:22}}
                />
        </View>
        <Text style={{marginTop:1}}>Company one {/*{data.id}*/}</Text>
        <Text style={{}}>Company Two</Text>
        <Text style={{}}>Location 110023</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('AgentProfile', {id: data.id})}
              style={{
                 margin:8,
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
                source={require('../images/book.png')}
                style={{ margin: 5, }}
              />


              <View style={{ flexWrap: 'wrap',justifyContent:'center'}}>
                <Text>Company Name{/*{data.title}*/}</Text>


                <View style={{ backgroundColor: '#fff',flexDirection:'row',alignItems:'center'}}>
          <Text style={{ fontSize:15}}>Verified:  </Text>
          <Image

                  source={require('../images/tick.png')}
                  style={{height:22,width:22}}
                />
        </View>
        <Text style={{marginTop:1}}>Company one {/*{data.id}*/}</Text>
        <Text style={{}}>Company Two</Text>
        <Text style={{}}>Location 110023</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('AgentProfile', {id: data.id})}
              style={{
                 margin:8,
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
                source={require('../images/book.png')}
                style={{ margin: 5, }}
              />


              <View style={{ flexWrap: 'wrap',justifyContent:'center'}}>
                <Text>Company Name{/*{data.title}*/}</Text>


                <View style={{ backgroundColor: '#fff',flexDirection:'row',alignItems:'center'}}>
          <Text style={{ fontSize:15}}>Verified:  </Text>
          <Image

                  source={require('../images/tick.png')}
                  style={{height:22,width:22}}
                />
        </View>
        <Text style={{marginTop:1}}>Company one {/*{data.id}*/}</Text>
        <Text style={{}}>Company Two</Text>
        <Text style={{}}>Location 110023</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('AgentProfile', {id: data.id})}
              style={{
                 margin:8,
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
                source={require('../images/book.png')}
                style={{ margin: 5, }}
              />


              <View style={{ flexWrap: 'wrap',justifyContent:'center'}}>
                <Text>Company Name{/*{data.title}*/}</Text>


                <View style={{ backgroundColor: '#fff',flexDirection:'row',alignItems:'center'}}>
          <Text style={{ fontSize:15}}>Verified:  </Text>
          <Image

                  source={require('../images/tick.png')}
                  style={{height:22,width:22}}
                />
        </View>
        <Text style={{marginTop:1}}>Company one {/*{data.id}*/}</Text>
        <Text style={{}}>Company Two</Text>
        <Text style={{}}>Location 110023</Text>
              </View>

            </TouchableOpacity>



          </View>


      </ScrollView>
      </Content>
      </Container>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 10,
  },
});
export default FindAgent;
